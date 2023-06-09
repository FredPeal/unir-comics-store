import React, {useEffect,useState} from "react";

import {Table} from "../../components/Table";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import axios from "axios";
import Loading from '../../components/Loading';
import {Icon} from '../../components/Icon';

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
                let results = response.data.results.map((item) => {
                    return {
                        id: item.id,
                        title: item.title,
                        description: item.description
                    }
                });
                setRows(results);
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
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="search-icon" />
                        <span className="input-group-text" id="search-icon">
                            <Icon icon = "bi-search"/>
                        </span>
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