import React, {useState,useEffect} from "react";

import {Image} from "../../components/Image";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ClientFormView = (props) => {
    const [input, setInput] = useState({});
    const routeParams = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        if(routeParams.id){

        }
    }, []);
    const handleChange = (event) => {
        setInput({
          ...input,
          [event.target.name]: event.target.value
        });
      };
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Crear Cliente</h1>
                    </div>
                </div>
              <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                           <label htmlFor="id">ID:</label>
                           <input type="text" id="id" name="id" className="form-control" value={input.id} onChange={handleChange} />
                         </div>
                         <div className="mb-3">
                           <label htmlFor="nombre">Nombre:</label>
                           <input type="text" id="nombre" name="nombre" className="form-control" value={input.nombre} onChange={handleChange} />
                         </div>
                         <div className="mb-3">
                           <label htmlFor="apellido">Apellido:</label>
                           <input type="text" id="apellido" name="apellido" className="form-control" value={input.apellido} onChange={handleChange} />
                         </div>
                         <div className="mb-3">
                           <label htmlFor="telefono">Teléfono:</label>
                           <input type="text" id="telefono" name="telefono" className="form-control" value={input.telefono} onChange={handleChange} />
                         </div>
                         <div className="mb-3">
                           <label htmlFor="direccion">Dirección:</label>
                           <input type="text" id="direccion" name="direccion" className="form-control" value={input.direccion} onChange={handleChange} />
                         </div>
                    </form>
                </div>

              </div>
              <div className="row">
                <div className="col-1">
                    <button className="btn btn-primary">Guardar</button>
                </div>
                <div className="col-1">
                    <button className="btn btn-secondary">Cancelar</button>
                </div>
                <div className="col-1">
                    <button className="btn btn-danger">Eliminar</button>
                </div>
                <div className="col-1">
                    <button className="btn btn-secondary" onClick={() => navigate('/clients')}>Menu Principal</button>
                </div>
              </div>
            </div>
        </>
    );
}