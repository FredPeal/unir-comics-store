import React, { useState } from "react";
import { Paginator } from "./Paginator";
import { useNavigate } from "react-router-dom";
import {Modal} from "./Modal";

export const Table = (props) => {
  console.log(props);
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table">
                          <thead>
                            <tr>
                              {
                                props.column.map((item, index) => {
                                    return <th key={index} scope="col">{item}</th>
                                })
                              }
                              <th>Acciones</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                                props.rows.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row"><a href={(props.path+item.id)}>{item.id}</a></th>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>
                                                <Modal 
                                                  onClick={()=>{setShowModal(true)}} 
                                                  onClose={()=>{setShowModal(false)}} 
                                                  buttonText="Eliminar"
                                                  showModal={showModal}
                                                  content="¿Está seguro que desea eliminar este registro?"
                                                  successButtonText="Eliminar"
                                                  callback={() => {console.log("Eliminado"); setShowModal(false)}}
                                                  buttonClassName="btn btn-danger">Eliminar</Modal>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                          </tbody>
                        </table>   
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Paginator/>
                    </div>
                </div>
            </div>         
        </>
    )
};