import React from 'react';

export const Image = (props) => {
    return (
        <>
            <div className="preview-image d-flex align-items-center justify-content-center">
                {/* Aquí puedes colocar tu lógica para mostrar la imagen */}
                <img src={props.src} alt="Previsualización" className="img-fluid" />
            </div>       
        </>
    );
}