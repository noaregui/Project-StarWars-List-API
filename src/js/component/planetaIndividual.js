import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"
import { useNavigate, useParams } from "react-router";

export const PlanetaIndividual = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();

    const planetaElegido = store.planetas.find(planeta => planeta.uid == params.uid)

      return (
        <div className="card-container">
            <div className="card" style={{ width: "18rem" }} key={planetaElegido.uid}>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A92131654C1E0B1A4C072A327E49FB30CA8BDED279852FB32CAD9B33B4AAAB1/scale?width=1600&aspectRatio=1.78&format=webp" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{planetaElegido.name}</h5>
                    <p className="card-text">{planetaElegido.population}</p>
                    <p className="card-text">{planetaElegido.climate}</p>
                    <p className="card-text">{planetaElegido.gravity}</p>
                </div>
            </div>
        </div>
    );
};

