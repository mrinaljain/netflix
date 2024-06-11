import React, { useEffect } from 'react'
import Header from './Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
function AppLayout() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   useEffect(() => {
      let unSubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(
               addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
               })
            );
            navigate("/browse");
         } else {
            console.log("user signedout ...");
            dispatch(removeUser());
            navigate("/");
         }
      });
      // remove the above listener on unmount/ basically unsubscribe
      return () => {
         unSubscribe();
      }
   }, []);
   const user = useSelector((store) => store.user);
   return (
      <>
         {user !== null && <Header />}
         <Outlet />
      </>
   )
}

export default AppLayout;