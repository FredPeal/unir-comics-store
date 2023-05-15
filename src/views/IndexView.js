import React from 'react';

import {Card} from '../components/Card';
import { useNavigate } from "react-router-dom";

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
                        <Card path="/books" title="Libros" content="Libros disponibles" action_title="Ver libros"/>
                    </div>
                    <div className="col">
                        <Card title="Clientes" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." action_title="Ver clientes"/>
                    </div>
                    <div className="col">
                        <Card title="Usuarios" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." action_title="Ver usuarios"/>
                    </div>
                    <div className="col">
                        <Card title="Ajustes" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." action_title="Ver ajustes"/>
                    </div>
                </div>
            </div>
        </>
    );
}