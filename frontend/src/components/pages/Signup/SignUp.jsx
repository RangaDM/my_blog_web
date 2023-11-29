import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  CardHeader,
  CardBody,
  Dialog,
} from "@material-tailwind/react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { IconButton } from "@mui/material";
import backImage from "../../../images/Ranga.png"

const SignUp = () => {
  return (
    <>
    <img
      className=" mx-auto object-cover object-center shadow-blue-gray-900/50"
      src={backImage}
      alt="logo"
    />
    <Dialog size="xs" open={true} className="bg-transparent shadow-none">
      <div className="mx-auto justify-center max-w-screen-md pt-12 flex pb-12">
        <Card className="w-100" shadow={true}>
        <CardHeader
            variant="gradient"
            color="pink"
            className="mb-1 h-28 flex flex-col justify-center place-items-center"
          >
            <IconButton 
            onClick={() => {
              window.location.href = "/";
            }}>
            <HomeRoundedIcon />
            </IconButton>
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-1">
            <Typography color="gray" className="font-normal">
              Nice to meet you! Enter your details to register.
            </Typography>
            <form className="mt-6 mb-1 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-5">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="name"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="mt-5" fullWidth>
                sign up
              </Button>
              <Typography color="gray" className="mt-3 text-center font-normal">
                Already have an account?{" "}
                <a href="/login" variant="small"
                color="blue-gray"
                className=" font-bold">
                  Sign In
                </a>
              </Typography>
            </form>
          </CardBody>
        </Card>
      </div>
    </Dialog>
    </>
  );
};

export default SignUp;
