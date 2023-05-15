import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Peal Booktore</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Libros</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Clientes</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Usuarios</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Ajustes</a>
                  </li>
                </ul>
              </div> */}
            </div>
        </nav>
        </>
    );
}