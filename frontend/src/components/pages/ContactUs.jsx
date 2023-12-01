import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
  Textarea,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { useRef, useState } from "react";
import setDataDocument from "../../Utils/DataFetch/setDataDocument";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMgz = () => {
    const data = {
      email: email,
      subject: subject,
      message: message,
    };
    if (email === "" || subject === "" || message === "") {
      setOpenError("Please fill all the fields");
      return;
    }
    setDataDocument("contactUs", email, data);
    setOpen(true);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

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
            alt="card"
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
          <form ref={formRef} className="flex flex-col gap-6 p-4 pt-0">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Message
              <Typography color="red" variant="small">
                {openError}
              </Typography>
            </Typography>
            <Input onChange={handleEmailChange} label="Email" required />
            <Input onChange={handleSubjectChange} label="Subject" />
            <Textarea onChange={handleMessageChange} rows={6} label="Message" />
            <Button
              onClick={() => {
                sendMgz();
              }}
            >
              Send Message
            </Button>
          </form>
        </CardBody>
      </Card>
      <Dialog
        open={open}
        handler={() => {
          setOpen(false);
        }}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Great 🎉🎊🥰</DialogHeader>
        <DialogBody>
          Thank you for your message. We will get back to you as soon as
          possible. Have a nice day!
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default ContactUs;
