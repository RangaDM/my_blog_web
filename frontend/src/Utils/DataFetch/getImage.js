import { getDownloadURL, ref } from "firebase/storage"
import { storage } from "../../Firebase/firebase";


const getImageFirebase = (uid , setFunction) => {
    const imgRef = ref(storage, `images/${uid}`)
    getDownloadURL(imgRef)
          .then((url) => {
            setFunction(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
}

export default getImageFirebase