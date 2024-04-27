import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"
import { useNavigate, useParams } from "react-router";

export const VehiculoIndividual = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        actions.cargarVehiculoIndividual(params.uid);
        console.log(store.vehiculoSeleccionado)
    }, []);

      return (
        <div className="card-container-vehiculo">
            <div className="card" style={{ width: "18rem" }}>
                <img src={store.imagenesVehiculos[params.numero]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{store.vehiculoSeleccionado.name}</h5>
                    <p className="card-text">Model: {store.vehiculoSeleccionado.model}</p>
                    <p className="card-text">Speed: {store.vehiculoSeleccionado.max_atmosphering_speed}</p>
                    <p className="card-text">Passengers: {store.vehiculoSeleccionado.passengers}</p>
                </div>
            </div>
        </div>
    );
};

