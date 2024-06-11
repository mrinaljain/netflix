import "./App.css";
import { RouterProvider, useNavigation } from "react-router-dom";
import { routes } from "./routes";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        console.log("Signin Complete", user);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        console.log("SignOut Complete");
        dispatch(removeUser());
      }
    });
  }, []);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
