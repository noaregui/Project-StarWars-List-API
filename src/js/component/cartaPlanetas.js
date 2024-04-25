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
            {store.planetas.map((planeta, index) => (
                <div className="card" style={{ width: "18rem" }} key={planeta.uid}>
                    <img src={store.imagenesPlanetas[index]} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{planeta.name}</h5>
                        <button className="btn btn-primary" onClick={() => navigate(`/vista-planeta-individual/${planeta.uid}/${index}`)}>Read more</button>
                        <button onClick={() => actions.añadirFavoritos(planeta.name)}><i className="fa-regular fa-heart" ></i></button>
                    </div>
                </div>
            ))}
        </div>
    );
};