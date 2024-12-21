import React, { useRef, useState } from "react";
import Header from "./Header";
import Bg_Image from "../Utilise/Bg_Image";
import { checkValidation } from "../Utilise/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utilise/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utilise/userSlice";

const Login_Page = () => {
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const [show, setShow] = useState(false);
  const eyeButton = () => {
    setShow(!show);
  };

  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const passsword = useRef(null);
  const name = useRef(null);

  const handleValidation = () => {
    const validate = checkValidation(
      email.current.value,
      passsword.current.value
    );
    setErrorMsg(validate);

    if (validate) return;

    if (!isSignIn) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        passsword.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              //Dispatch Action
              const { uid, email, displayName } = auth;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        passsword.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <Bg_Image />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute bg-black bg-opacity-75 p-12 w-1/4 rounded-md mt-40 mx-auto right-0 left-0 text-white"
      >
        <h1 className="text-3xl font-bold my-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-3 my-2 w-full bg-black bg-opacity-50 border border-neutral-500 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-3 my-2 w-full bg-black bg-opacity-50 border border-neutral-500 rounded-md"
        />
        <input
          ref={passsword}
          type={show ? "text" : "password"}
          placeholder="Password"
          className="p-3 my-2 w-full bg-black bg-opacity-50 border border-neutral-500 rounded-md"
        />
        <button className="absolute py-5 right-14" onClick={eyeButton}>
          👁️
        </button>
        <p className="text-red-600">{errorMsg}</p>
        <button
          className="bg-red-600 p-2 my-2 w-full font-bold rounded-md"
          onClick={handleValidation}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-center cursor-pointer hover:underline underline-offset-2">
          Forgot Password?
        </p>
        {isSignIn ? (
          <p className="my-2 text-neutral-400">
            New to Netflix?
            <span
              className="mx-1 font-bold text-white cursor-pointer hover:underline underline-offset-2"
              onClick={toggleSignIn}
            >
              Sign Up Now.
            </span>
          </p>
        ) : (
          <p className="my-2 text-neutral-400">
            Already Registered?
            <span
              className="mx-1 font-bold text-white cursor-pointer hover:underline underline-offset-2"
              onClick={toggleSignIn}
            >
              Sign In Now.
            </span>
          </p>
        )}

        <p className="text-sm my-4 text-neutral-400">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="mx-1 text-blue-500 cursor-pointer hover:underline underline-offset-2">
            Learn more.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login_Page;
