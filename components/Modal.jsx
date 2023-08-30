import Link from "next/link";
import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-foam-800 p-10 rounded-lg shadow-md border-2 border-foam-500">
        <p className="mb-4 text-2xl font-bold">Are You Sure?</p>
        <button
          className="  mt-4 px-4 py-2 bg-foam-950 text-white border-2 border-foam-600 rounded-md mr-4 "
          onClick={onClose}
        >
          Cancel
        </button>
        <Link href="main">
          <button className="mt-4 px-4 py-2 bg-foam-950 text-white border-2 border-foam-600 rounded-md ml-4">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
