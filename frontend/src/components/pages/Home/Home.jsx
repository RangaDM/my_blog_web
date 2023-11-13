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
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
                    <FacebookOutlinedIcon sx={{color:"blue"}}/>
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
                    <TwitterIcon sx={{color:"#1C9CEA"}}/>
                  </IconButton>
                </Typography>
              </Tooltip>
              <Tooltip
                placement="bottom"
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
                    <InstagramIcon sx={{color:"#DE6666"}}/>
                  </IconButton>
                </Typography>
              </Tooltip>
              <Tooltip
                placement="top"
                content="Visit"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <Typography
                  as="a"
                  href="https://github.com/RangaDM"
                  variant="lead"
                  color="black"
                  textGradient
                >
                  <IconButton>
                    <GitHubIcon sx={{color:"black"}}/>
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
                  href="https://www.linkedin.com/in/ranga-maithreepala-0a9196262"
                  variant="lead"
                  color="blue"
                  textGradient
                >
                  <IconButton>
                    <LinkedInIcon sx={{color:" #0A66C2"}}/>
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
