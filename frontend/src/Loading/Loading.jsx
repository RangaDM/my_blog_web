import { Spinner } from "@material-tailwind/react";

const Loading = () => {
  return (
    <div className="flex -mt-32 h-3/4 items-center justify-center content-center">
      <Spinner color="pink" />
    </div>
  );
};

export default Loading;
