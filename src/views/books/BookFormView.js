import React, {useState,useEffect} from "react";

import {Image} from "../../components/Image";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const BookFormView = (props) => {
    const [input, setInput] = useState({});
    const [src, setSrc] = useState("https://via.placeholder.com/300x300");
    const routeParams = useParams();
    const { loading, error, data, API_REQUEST, setData } = useAxios();
    let navigate = useNavigate();
    useEffect(() => {
        console.log(routeParams);
        if(routeParams.id){
            API_REQUEST(
                {
                  AxiosInstance: axios,
                  method: "GET",
                  url: "/comics/"+routeParams.id,
                  requestConfig: {}
                },
                (response) => {
                    let input = {
                        "title": response.data.results[0].title,
                        "description": response.data.results[0].description,
                        "author": response.data.results[0].creators.items.length > 0 ? response.data.results[0].creators.items[0].name : ""  ,
                    }
                    let image = response.data.results[0].thumbnail.path+"/portrait_uncanny."+response.data.results[0].thumbnail.extension;
                    setInput(input);
                    setSrc(image);
                    console.log(image);
                }
            )
        }
    }, []);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Crear Comic</h1>
                    </div>
                </div>
              <div className="row">
                <div className="col-md-6">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">Título</label>
                      <input type="text" onChange={(event) => 
                            setInput(input => ({...input, ...{"title": event.target.value}})
                        )} className="form-control" id="title" value={input.title} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="author" className="form-label">Autor</label>
                      <input type="text" className="form-control" id="author" value={input.author}/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">Descripción</label>
                      <textarea className="form-control" id="description" rows="3">
                        {input.description}
                      </textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Imagen</label>
                        <input className="form-control" type="file" id="image" />
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <div className="preview-image">
                    <Image src={src} />
                  </div>
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
                    <button className="btn btn-secondary" onClick={() => navigate('/books')}>Menu Principal</button>
                </div>
              </div>
            </div>
        </>
    );
}