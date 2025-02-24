import React, { useEffect } from "react";
import close from "../assets/images/svg/close.svg";

const CustomModal = ({ style, isOpen, onClose, title, children }) => {
  const onClickClose = () => {
    onClose(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={`modalBox ${isOpen ? "open" : ""}`}>
      <div className="overlay" onClick={onClickClose}></div>
      <div className="modal">
        <div className="modalHeader">
          <p className="modalTitle">{title}</p>
          <img src={close} alt="close image" onClick={() => onClose(false)} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
