import React, { useEffect, useState } from "react";
import { Avatar, Tooltip } from "@material-tailwind/react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  PhoneIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import getImageFirebase from "../../Utils/DataFetch/getImage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import getDataDocument from "../../Utils/DataFetch/getDataDocument";
import proPic from "../../images/profileIcon.svg"

const navListMenuItems = [
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    link: "/about-us",
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    link: "blogs",
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
    link: "/services",
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
    link: "/support",
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
    link: "/contact-us",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => (
      <a key={key} href={link}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <Typography
        as="a"
        href="blogs"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Blog</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="contact-us"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [Nuser, setUser] = useState();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    const userCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        getDataDocument("users", user.uid, setUser);
        // console.log(Nuser.name);
      } else {
        console.log("no user");
      }
    });
    return () => {
      userCheck();
    };
    // eslint-disable-next-line
  }, []);

  if(imgUrl === ""){
    setTimeout(() => {
      getImageFirebase(Nuser?.uid, setImgUrl);
      // eslint-disable-next-line
      console.log(imgUrl);
    }, 1500);
  }

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 mb-1">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          Mantrass
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <Tooltip
            placement="top"
            content="Profile"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Avatar
              onClick={() => {
                window.location.href = "profile";
              }}
              variant="circular"
              alt="profile"
              size="sm"
              className="border-1 hover:cursor-pointer focus:z-10 mr-3"
              src={Nuser ? imgUrl : proPic}
            />
          </Tooltip>
          <Button
            onClick={() => {
              window.location.href = "/signup";
            }}
            variant="gradient"
            size="sm"
          >
            Join
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button
            onClick={() => {
              window.location.href = "/profile";
            }}
            variant="outlined"
            size="sm"
            color="blue-gray"
            fullWidth
          >
            Profile
          </Button>
          <Button
            onClick={() => {
              window.location.href = "/signup";
            }}
            variant="gradient"
            size="sm"
            fullWidth
          >
            Join
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
