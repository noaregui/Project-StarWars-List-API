import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"
import { useNavigate, useParams } from "react-router";

export const VehiculoIndividual = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();

    const vehiculoElegido = store.vehiculos.find(vehiculo => vehiculo.uid == params.uid)

      return (
        <div className="card-container">
            <div className="card" style={{ width: "18rem" }} key={vehiculoElegido.uid}>
                <img src={store.imagenesVehiculos[params.numero]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{vehiculoElegido.name}</h5>
                    <p className="card-text">Model: {vehiculoElegido.model}</p>
                    <p className="card-text">Speed: {vehiculoElegido.max_atmosphering_speed}</p>
                    <p className="card-text">Passengers: {vehiculoElegido.passengers}</p>
                </div>
            </div>
        </div>
    );
};

