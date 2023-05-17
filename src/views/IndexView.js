import React from 'react';

import {Card} from '../components/Card';
import { useNavigate } from "react-router-dom";
import comics from "../assets/comics.jpg";
import client from "../assets/client.png";
import facturas from "../assets/facturas.png";

export const IndexView = () => {
    let navigate = useNavigate();
    return (
        <>
        <br/>
        <br/>
        <br/>
        <br/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Card path="/books" image={comics} title="Comics" content="Comics disponibles" action_title="Ver Comics"/>
                    </div>
                    <div className="col">
                        <Card title="Clientes" path="/clients" content="Base de Datos de nuestros clientes" image={client} action_title="Ver clientes"/>
                    </div>
                    <div className="col">
                        <Card title="Facturas" content="" image={facturas} action_title="Ver facturas" />
                    </div>
                </div>
            </div>
        </>
    );
}