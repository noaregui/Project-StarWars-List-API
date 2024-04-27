import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"
import { useNavigate, useParams } from "react-router";

export const PlanetaIndividual = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();
    
    useEffect(() => {
        actions.cargarPlanetaIndividual(params.uid);
        console.log(params)
    }, []);

    return (
        <div className="card-container-planeta">
            <div className="card" style={{ width: "18rem" }} >
                <img src={store.imagenesPlanetas[params.numero]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{store.planetaSeleccionado.name}</h5>
                    <p className="card-text">Population: {store.planetaSeleccionado.population}</p>
                    <p className="card-text">Climate: {store.planetaSeleccionado.climate}</p>
                    <p className="card-text">Gravity: {store.planetaSeleccionado.gravity}</p>
                </div>
            </div>
        </div>
    );
};

