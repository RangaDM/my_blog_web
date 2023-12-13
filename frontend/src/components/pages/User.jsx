import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import logOut from "../../Utils/Auth/logOut";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import getDataDocument from "../../Utils/DataFetch/getDataDocument";
import Login from "./Login/Login";
import imageUpload from "../../Utils/DataFetch/imageUpload";

const User = () => {
  const [Nuser, setUser] = useState();
  const [img , setImg] = useState('');
  
  useEffect(() => {
    const userCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        getDataDocument("users", user.uid, setUser);
        // console.log(Nuser.name);
      } else {
        console.log("no user");
      }
    });
    return () => {
      userCheck();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    imageUpload(Nuser?.uid , img);
    // eslint-disable-next-line
  }
, [img])
  
  if (!Nuser) {
    return <Login />;
  }


  return (
    <div className="mt-12">
      <h1>Welcome {Nuser?.name}</h1>

      <Button
        color="red"
        onClick={() => {
          logOut();
        }}
      >
        Log Out
      </Button>
      <br/><br/><br/>
      <input type="file" onChange={(e)=>setImg(e.target.files[0])}/>
    </div>
  );
};

export default User;
