import React, {useEffect,useState} from "react";

import {Table} from "../../components/Table";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import axios from "axios";
import Loading from '../../components/Loading';
import {Icon} from '../../components/Icon';

export const ClientView = () => {
    let navigate = useNavigate();
    const { loading, error, data, API_REQUEST, setData } = useAxios();
    const [rows, setRows] = useState([]);
    const [loading2, setLoading2] = useState(false);
    let column = [
        "Id",
        "Nombre",
        "Apellido",
        "Telefono",
        "Email",
    ];
    useEffect(() => {
        let clients = [
            {
                id: 1,
                first_name: 'Juan',
                last_name: 'Pérez',
                phone: '123456789',
                address: 'Calle Principal 123',
                email: "juan@gmail.com"
              },
              {
                id: 2,
                first_name: 'María',
                last_name: 'Gómez',
                phone: '987654321',
                address: 'Avenida Central 456',
                email: "juan@gmail.com"

              },
              {
                id: 3,
                first_name: 'Pedro',
                last_name: 'López',
                phone: '555555555',
                address: 'Plaza Mayor 789',
                email: "juan@gmail.com"
              },
              {
                id: 4,
                first_name: 'Laura',
                last_name: 'Rodríguez',
                phone: '111111111',
                address: 'Paseo del Sol 234',
                email: "juan@gmail.com"
              },
              {
                id: 5,
                first_name: 'Carlos',
                last_name: 'Hernández',
                phone: '999999999',
                address: 'Callejón Oscuro 567',
                email: "juan@gmail.com"

              }
        ];
        setRows(clients);

    }, []);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Clientes</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="search-icon" />
                        <span className="input-group-text" id="search-icon">
                            <Icon icon = "bi-search"/>
                        </span>
                    </div>                   
                </div>
                <div className="row">
                    <div className="col">
                        <Table column={column} rows={rows} path="/clients/" />
                        {loading2 ? <Loading/> : ""}
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <button onClick={() => navigate("/")} className="btn btn-secondary">Menu Principal</button>
                    </div>
                    <div className="col">
                        <button onClick={() => navigate("/clients/create")} className="btn btn-primary">Crear</button>
                    </div>
                </div>
            </div>
        </>
    );

}