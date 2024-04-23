import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"
import { Navigate, useNavigate } from "react-router";

export const CartaPlanetas = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    //   const cargarPersonajes = useStoreActions(actions => actions.cargarPersonajes);
    //   const personajes = useStoreState(state => state.personajes);

    useEffect(() => {
        actions.cargarPlanetas();
    }, []);

    return (
        <div className="card-container">
            {store.planetas.map(planetas => (
                <div className="card" style={{ width: "18rem" }} key={planetas.uid}>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A92131654C1E0B1A4C072A327E49FB30CA8BDED279852FB32CAD9B33B4AAAB1/scale?width=1600&aspectRatio=1.78&format=webp" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{planetas.name}</h5>
                        <p className="card-text">{planetas.population}</p>
                        <p className="card-text">{planetas.climate}</p>
                        <p className="card-text">{planetas.gravity}</p>
                        <button className="btn btn-primary" onClick={() => navigate(`/single/${planetas.uid}`)}>Read more</button>
                        <button><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            ))}
        </div>
    );
};