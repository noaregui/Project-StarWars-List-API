import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const CartaPersonajes = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    //   const cargarPersonajes = useStoreActions(actions => actions.cargarPersonajes);
    //   const personajes = useStoreState(state => state.personajes);
    
    useEffect(() => {
        actions.cargarPersonajes();
    }, []);



    return (
        <div className="card-container">
            {store.personajes.map((personaje, index) => (
                <div className="card" style={{ width: "18rem" }} key={personaje.uid}>
                    <img
                        src={store.imagenesPersonajes[index]}
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">{personaje.name}</h5>
                        <button className="btn btn-primary" onClick={() => navigate(`/vista-personaje-individual/${personaje.uid}/${index}`)}>Read more</button>
                        <button><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            ))}
        </div>
    );
};