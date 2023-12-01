import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Mainlayout from "../Layout/Mainlayout";
import Login from "../components/pages/Login/Login";
import SignUp from "../components/pages/Signup/SignUp";
import ContactUs from "../components/pages/ContactUs";
import Categories from "../components/pages/Categories";
import AboutUs from "../components/pages/AboutUs";
import User from "../components/pages/User";
import Blogs from "../Blogs/Blogs";

const AppRouter = () => {
  // const [uid, setUid] = useState();

  // useEffect(() => {
  //   const userCheck = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       console.log(uid);
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="categories" element={<Categories />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="profile" element={<User />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
