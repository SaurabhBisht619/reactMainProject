import React from 'react';
import ReactDOM from 'react-dom';
import './Portals.css'
const Portals = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>,
    document.querySelector('.myPortal')
  );
};

export default Portals;



