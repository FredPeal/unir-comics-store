import React, {useEffect,useState} from "react";

import {Table} from "../../components/Table";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import axios from "axios";
import Loading from '../../components/Loading';

export const BooksViews = () => {
    let navigate = useNavigate();
    const { loading, error, data, API_REQUEST, setData } = useAxios();
    const [rows, setRows] = useState([]);
    const [loading2, setLoading2] = useState(true);
    let column = [
        "Id",
        "Titulo",
        "Descripcion",
    ];
    useEffect(() => {
        API_REQUEST(
            {
              AxiosInstance: axios,
              method: "GET",
              url: "/comics",
              requestConfig: {}
            },
            (response) => {
                setRows(response.data.results);
                setLoading2(false);
            }
          )
    }, []);
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
                        <Table column={column} rows={rows} path="/books/" />
                        {loading2 ? <Loading/> : ""}
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