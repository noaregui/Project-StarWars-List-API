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
                    <img
                        src={store.imagenesVehiculos[index]}
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">{vehiculo.name}</h5>
                        <button class="button" data-text="Awesome" onClick={() => navigate(`/vista-vehiculo-individual/${vehiculo.uid}/${index}`)}>
                            <span class="actual-text">&nbsp;Info&nbsp;</span>
                            <span aria-hidden="true" class="hover-text">&nbsp;Info&nbsp;</span>
                        </button>
                        <button class="fav" onClick={() => actions.añadirFavoritos(vehiculo.name)}>
                            <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
                                <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
                            </svg>
                        </button>                        
                    </div>
                </div>
            ))}
        </div>
    );
};