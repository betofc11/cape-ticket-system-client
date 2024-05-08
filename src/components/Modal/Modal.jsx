import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, isOpen, setIsOpen }) => {

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return createPortal(
    <div
      className={`transition ease-in-out delay-150 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      } fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-black/75`}
    >
      <div className="relative rounded-3xl p-20 bg-zinc-800">
        <button type="button" onClick={handleCloseModal} className="absolute right-0 top-2 border-0">
          <span className="material-symbols-outlined">close</span>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
