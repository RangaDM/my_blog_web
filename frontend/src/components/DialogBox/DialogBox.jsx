import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function DialogCustomAnimation() {
  const [open, setOpen] = React.useState(true);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Great 🎉🎊</DialogHeader>
        <DialogBody>
          Thank you for your message. We will get back to you as soon as
            possible. Have a nice day!
        </DialogBody>
      </Dialog>
    </>
  );
}