"use client";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import { auth, googelProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

const LogInPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(auth?.currentUser?.photoURL);

  const googleSignInHandler = async () => {
    try {
      await signInWithPopup(auth, googelProvider);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div
        className="fixed  top-10 left-10 right-10 bottom-10 p-4 border-4 border-foam-300 rounded-3xl
  bg-gradient-to-b from-foam-400 to-foam-900  "
      >
        <div
          className="text-center mt-16 text-8xl text-foam-900 font-serif 
"
        >
          Discover the world of Music
        </div>

        <div className="flex justify-evenly mt-64 text-5xl">
          <button
            className="border-2 rounded-xl p-4 bg-foam-950 text-foam-300 border-foam-300 "
            onClick={googleSignInHandler}
          >
            SignIn with Google
          </button>
          <button className="border-2 rounded-xl p-4 bg-foam-950 text-foam-300 border-foam-300 ">
            SignUp
          </button>
        </div>
        <button
          className="flex justify-center place-items-center content-center border-2 rounded-xl p-4 bg-foam-950 text-foam-300 border-foam-300  w-96 mt-64 h-8"
          onClick={openModal}
        >
          continue without Login
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default LogInPage;
