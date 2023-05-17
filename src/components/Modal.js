import React, { useState } from 'react';

export const Modal = (props) => {


  return (
    <div>
        <button className={props.buttonClassName} onClick={props.onClick}>{props.buttonText}</button>
      {props.showModal && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{props.onClose}</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={props.onClose}></button>
              </div>
              <div className="modal-body">
                <p>{props.content}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={props.onClose}>
                  Cerrar
                </button>
                <button type="button" className="btn btn-primary" onClick={props.callback}>
                  {props.successButtonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};