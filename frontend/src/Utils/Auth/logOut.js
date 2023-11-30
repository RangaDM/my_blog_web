import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

const logOut = () => {
    signOut(auth)
              .then(() => {
                // Sign-out successful.
                window.location.href = "/";
                
              })
              .catch((error) => {
                // An error happened.
              });
}

export default logOut;