import React, { useEffect } from "react";
import close from "../assets/images/svg/close.svg";

const CustomModal = ({ style, isOpen, onClose, title, children }) => {
  const onClickClose = () => {
    onClose(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto"; 
    };
  }, [isOpen]);

  return (
    <div style={style} className={`modalBox ${isOpen ? "open" : ""}`}>
      <div className="overlay" onClick={onClickClose}></div>
      <div style={style} className="modal">
        <div className="modalHeader">
          <p className="modalTitle">{title}</p>
          <img src={close} alt="close image" onClick={onClickClose} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
