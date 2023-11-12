import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
  Dialog,
} from "@material-tailwind/react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { IconButton } from "@mui/material";
import backImage from "../../../images/Ranga.png"

const Login = () => {
  return (
    <>
    <img
      className=" mx-auto object-cover object-center shadow-blue-gray-900/50"
      src={backImage}
      alt="logo image"
    />
    <Dialog size="xs" open={true} className="bg-transparent shadow-none">
      <div className=" mx-auto justify-center max-w-screen-md pt-12 flex pb-12">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="pink"
            className="mb-1 h-28 flex flex-col justify-center place-items-center"
          >
            <IconButton 
            onClick={() => {
              window.location.href = "/";
            }}>
            <HomeRoundedIcon/>
            </IconButton>
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
            
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
          <Typography
              className=" font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography>
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="/signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </Dialog>
    </>
  );
};

export default Login;
