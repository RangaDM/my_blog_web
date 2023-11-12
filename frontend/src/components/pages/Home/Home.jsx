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
          Who am I?
        </Typography>
        <Typography color="gray" className="font-normal">
          I am a third year undergraduate of University of Ruhuna, Faculty of
          Engineering. I am a self-motivated, enthusiastic and hardworking
          individual who is willing to work on challenging tasks and to learn
          new technologies. I am a fast learner and a team player who is
          capable of working under pressure. I am a person who is always willing
          to accept challenges and take responsibilities.
          
        </Typography>
      </div>
    </div>
  );
};

export default Home;
