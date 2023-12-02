import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";


const userLogin = (email , password , setFunction) => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    // const user = userCredential.user;
    // ...
    console.log("user login success");
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    setFunction("Enter valid email and password");
  });
}

export default userLogin;