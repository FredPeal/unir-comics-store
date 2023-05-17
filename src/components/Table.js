import React, { useState } from "react";
import { Paginator } from "./Paginator";
import { useNavigate } from "react-router-dom";
import {Modal} from "./Modal";

export const Table = (props) => {
  console.log(props);
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const renderTd = (value) => {
    return (
      <>
        { Object.keys(value).map((key,index) => (
          key == "id" ? <th scope="row"><a onClick={() => navigate(props.path+value[key])} href="#">{value[key]}</a></th>:<td key={index}>{value[key]}</td>
        ))}
      </>
    );
  };
    
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
                                            {renderTd(item)}
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