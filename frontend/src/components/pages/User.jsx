import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import logOut from "../../Utils/Auth/logOut";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

const User = () => {
  // const [uid, setUid] = useState();

  // useEffect(() => {
  //   const userCheck = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       // console.log(uid);
  //       setUid(uid);
  //     } else {
  //       console.log("no user");
  //     }
  //   });
  //   return () => {
  //     userCheck();
  //   };
  //   // eslint-disable-next-line
  // }, []);

  // console.log(uid);

  return (
    <div className="mt-12">
      <h1>user</h1>

      <Button
        color="red"
        onClick={() => {
          logOut();
        }}
      >
        Log Out
      </Button>
    </div>
  );
};

export default User;
