import React from "react";

import {Table} from "../../components/Table";
import { useNavigate } from "react-router-dom";

export const BooksViews = () => {
    let navigate = useNavigate();
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Libros</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Table/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <button onClick={() => navigate("/")} className="btn btn-secondary">Menu Principal</button>
                    </div>
                    <div className="col">
                        <button onClick={() => navigate("/books/create")} className="btn btn-primary">Crear</button>
                    </div>
                </div>
            </div>
        </>
    );

}