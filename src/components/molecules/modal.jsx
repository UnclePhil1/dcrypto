import React from "react";
import '../style.css'

const Modal = () => {
    const handleClick = () => {
      setShowModal(false);
    };
  
    return (
      <div className="modal">
        <div className="modal-content">
          </div>
        <div className="modal-backdrop" onClick={handleClick}></div>
      </div>
    );
  };
  
export default Modal