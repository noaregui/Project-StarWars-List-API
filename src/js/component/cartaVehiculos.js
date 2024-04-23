import React, { useEffect, useContext } from "react";
import {Context} from "../store/appContext"

import { Link } from "react-router-dom";

export const CartaVehiculos = () => {
    const {store, actions } = useContext(Context);

    useEffect(() => {
        actions.cargarVehiculos();
    }, []);

    return (
        <div className="card-container">
            {store.vehiculos.map(vehiculos => (
                <div className="card" style={{ width: "18rem" }} key={vehiculos.uid}>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A92131654C1E0B1A4C072A327E49FB30CA8BDED279852FB32CAD9B33B4AAAB1/scale?width=1600&aspectRatio=1.78&format=webp" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{vehiculos.name}</h5>
                        <p className="card-text">{vehiculos.model}</p>
                        <p className="card-text">{vehiculos.cargo_capacity}</p>
                        <p className="card-text">{vehiculos.consumables}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        <button><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            ))}
        </div>
    );
};