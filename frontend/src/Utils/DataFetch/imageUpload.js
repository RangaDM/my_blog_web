import { ref, uploadBytes } from "firebase/storage"
import { storage } from "../../Firebase/firebase"

const imageUpload = (uid , setFunction) => {
    const imgRef = ref(storage, `images/${uid}`)
    uploadBytes(imgRef , setFunction)
}

export default imageUpload