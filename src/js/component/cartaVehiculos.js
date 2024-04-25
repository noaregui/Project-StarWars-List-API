import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"
import { Navigate, useNavigate } from "react-router";

export const CartaVehiculos = () => {
    const navigate = useNavigate()  
    const { store, actions } = useContext(Context);
    
    useEffect(() => {
        actions.cargarVehiculos();
    }, []);

    return (
        <div className="card-container">
            {store.vehiculos.map((vehiculo, index) => (
                <div className="card" style={{ width: "18rem" }} key={vehiculo.uid}>
                    <img src={store.imagenesVehiculos[index]} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{vehiculo.name}</h5>
                        <p className="card-text">{vehiculo.model}</p>
                        <p className="card-text">{vehiculo.max_atmosphering_speed}</p>
                        <p className="card-text">{vehiculo.passengers}</p>
                        <button className="btn btn-primary" onClick={() => navigate(`/vista-vehiculo-individual/${vehiculo.uid}/${index}`)}>Read more</button>
                        <button><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            ))}
        </div>
    );
};