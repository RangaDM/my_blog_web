import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { Navigate } from "react-router-dom";

const logOut = () => {
    signOut(auth)
              .then(() => {
                // Sign-out successful.
                <Navigate to = "/" />
                
              })
              .catch((error) => {
                // An error happened.
              });
}

export default logOut;