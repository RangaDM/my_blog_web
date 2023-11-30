import React, { useEffect, useState } from "react";
import getDataFromCollection from "../Utils/DataFetch/getDataFromCollection";
import Loading from "../Loading/Loading";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    getDataFromCollection("blogs", setBlogData);
  }, []);

  if (blogData.length === 0) {
    return <Loading />;
  }

  return (
    <div className="w-full py-[10px] sm:px-12 md:px-[120px]">
      <section className="w-full p-4">
        <h1 className=" text-lg font-bold mt-2 ml-2 mb-3">Blogs</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[auto] gap-5">
          {blogData?.map(({ image, title, des }, index) => (
            <BlogItems key={index} image={image} title={title} des={des} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;

const BlogItems = ({ image, title, des }) => (
  <a href="#" className="inline-block">
    <Card className="mt-8">
      <CardHeader color="blue-gray" className="relative">
        <img src={image} alt={title} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {String(des).length > 50 ? String(des).substring(0, 50) + "..." : des}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-between items-center -mx-[7px]">
        {/* <a href="#" className="inline-block"> */}
        <Button size="sm" variant="text" className="flex items-center gap-2">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
        {/* </a> */}
      </CardFooter>
    </Card>
  </a>
);
