/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import propic from "../../../images/Ranga.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { IconButton } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Home = () => {
  return (
    <div className="flex">
      <div className="mx-auto max-w-screen-md pt-12">
        <div className="flex justify-center">
          <Card className="w-96">
            <CardHeader floated={false} className="h-80">
              <img src={propic} alt="profile-picture" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Ranga Dananjaya
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                UOR E-FAC
              </Typography>
            </CardBody>

            <CardFooter className="flex justify-center gap-2 pt-0">
              <Tooltip
                placement="left"
                content="Like"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <Typography
                  as="a"
                  href="#"
                  variant="lead"
                  color="blue"
                  textGradient
                >
                  <IconButton>
                    <FacebookOutlinedIcon />
                  </IconButton>
                </Typography>
              </Tooltip>
              <Tooltip
                placement="top"
                content="Follow"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <Typography
                  as="a"
                  href="#"
                  variant="lead"
                  color="light-blue"
                  textGradient
                >
                  <IconButton>
                    <TwitterIcon />
                  </IconButton>
                </Typography>
              </Tooltip>
              <Tooltip
                placement="right"
                content="Follow"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <Typography
                  as="a"
                  href="#"
                  variant="lead"
                  color="purple"
                  textGradient
                >
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>
                </Typography>
              </Tooltip>
            </CardFooter>
          </Card>
        </div>

        <Typography variant="h2" color="blue-gray" className="mb-2 mt-10">
          What is Material Tailwind
        </Typography>
        <Typography color="gray" className="font-normal">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more other agencies charge much lesser can you make the
          blue bluer?. I think we need to start from scratch can my website be
          in english?, yet make it sexy i&apos;ll pay you in a week we
          don&apos;t need to pay upfront i hope you understand can you make it
          stand out more?. Make the font bigger can you help me out? you will
          get a lot of free exposure doing this that&apos;s going to be a chunk
          of change other agencies charge much lesser. Are you busy this
          weekend? I have a new project with a tight deadline that&apos;s going
          to be a chunk of change. There are more projects lined up charge extra
          the next time.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean at bibendum metus. Sed vitae facilisis nulla, sed lacinia sem.
          Integer accumsan commodo sodales. Curabitur bibendum purus lorem, nec
          aliquet enim consequat id. Duis non iaculis urna. Morbi venenatis
          mattis nisi a luctus. Proin convallis velit diam, vitae vulputate
          dolor cursus et. Sed vulputate metus convallis mi lobortis imperdiet.
          Sed gravida eget lectus a aliquet. Aenean ut ligula at lectus vehicula
          rhoncus sit amet ultrices nisi. Nulla in aliquet tortor, quis posuere
          est. Etiam laoreet mattis quam et interdum. Curabitur semper lacinia
          tortor, elementum fermentum nulla sagittis eget. Nunc tempor, lacus et
          sagittis accumsan, libero tortor iaculis ex, ut venenatis neque dolor
          non ipsum. Donec efficitur pretium orci, fringilla ultrices libero
          tempus dapibus. Vestibulum ac placerat arcu. Fusce at diam maximus,
          accumsan tortor in, fermentum orci. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Nunc at dignissim ex. Etiam ac lectus
          et ligula posuere lobortis id eget ipsum. Sed ut purus tellus. Etiam
          auctor urna a enim congue, eu laoreet urna varius. Ut vel ex non lacus
          rutrum porttitor. Curabitur auctor condimentum quam nec faucibus.
          Integer ipsum justo, condimentum eu arcu et, efficitur posuere erat.
          In sagittis enim eget viverra commodo. Ut blandit suscipit lorem sit
          amet semper. Rangaaa
        </Typography>
      </div>
    </div>
  );
};

export default Home;
