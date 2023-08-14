import React from 'react';

export default function PopupNotFounnd({  onClose, status: { isOpen, successfull, text}}) {
    function handleClickOverlay(e) {
        e.stopPropagation();
    }

    return(
        <div className="popup" onClick={onClose}>
           <div className="popup__container" onClick={handleClickOverlay}>
        <div
          className={`popup__status ${successfull
              ? 'popup__status_success'
              : 'popup__status_fail'
          }`}
        ></div>
        <h2 className="popup__title">{text}</h2>
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );  
}