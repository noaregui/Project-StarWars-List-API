import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"
import { useNavigate, useParams } from "react-router";

export const PersonajeIndividual = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        actions.cargarPersonajeIndividual(params.uid);
    }, []);

      return (
        <div className="card-container-personaje">
            <div className="card" style={{ width: "18rem" }}>
                <img src={store.imagenesPersonajes[params.numero]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{store.personajeSeleccionado.name}</h5>
                    <p className="card-text">Height: {store.personajeSeleccionado.height}</p>
                    <p className="card-text">Hair color: {store.personajeSeleccionado.hair_color}</p>
                    <p className="card-text">Eye color: {store.personajeSeleccionado.eye_color}</p>
                </div>
            </div>
        </div>
    );
};

