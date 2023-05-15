import React from 'react';
import '../styles/card.css'
import { useNavigate } from "react-router-dom";

export const Card = (props) => {
    let navigate = useNavigate();
    return (
        <>
            <div className="card card-with">
                <img className="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.content}</p>
                  <a onClick={() => navigate(props.path)} className="btn btn-primary">{props.action_title}</a>
                </div>
            </div>
        </>
    );
}