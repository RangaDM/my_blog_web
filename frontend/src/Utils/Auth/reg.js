import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";


const userRegister = (email, password , name) =>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    console.log(user , name);
    window.location.href = "/";
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });


}

export default userRegister;