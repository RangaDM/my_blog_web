import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import setDataDocument from "../DataFetch/setDataDocument";


const userRegister = (email, password , name) =>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    console.log(user , name);

    const userData = {
      name: name,
      email: email,
      password: password,
      uid: user.uid,
    };

    setDataDocument("users", user.uid, userData);

    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });


}

export default userRegister;