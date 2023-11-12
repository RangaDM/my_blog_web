import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Input,
    Textarea,
    
  } from "@material-tailwind/react";

const ContactUs = () => {
    return (
        <div className="mx-auto justify-center max-w-screen-md pt-12 flex pb-12">

        <Card className="w-full max-w-[50rem] flex-row">
          <CardHeader
            shadow={true}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody className="mx-auto ml-5 mr-5 w-full">
          <div className="flex items-center justify-between px-4 pb-2">
            <Typography variant="h5" color="blue-gray">
              Contact Us
            </Typography>
          </div>
          <div className="mb-5 px-4">
            <Typography variant="small" color="gray" className="font-normal ">
              Write the message and then click button.
            </Typography>
          </div>
          <form className="flex flex-col gap-6 p-4">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input type="email" label="Email" />
            <Input label="Subject" />
            <Textarea rows={6} label="Message" />
            <Button>Send Message</Button>
          </form>
          </CardBody>
        </Card>
        </div>
      );
};

export default ContactUs;
