import React, { useEffect, useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const CartaVehiculos = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const cardContainerRef = useRef(null);

    useEffect(() => {
        actions.cargarVehiculos();
    }, []);

    const handleScrollRight = () => {
        if (cardContainerRef.current) {
            cardContainerRef.current.scrollLeft += 200; // Ajusta la cantidad de desplazamiento según sea necesario
        }
    };

    const handleScrollLeft = () => {
        if (cardContainerRef.current) {
            cardContainerRef.current.scrollLeft -= 200; // Desplazamiento hacia la izquierda
        }
    };

    return (
        <>
            <div className="card-container" ref={cardContainerRef} style={{ display: "flex", overflowX: "hidden" }}>
                {store.vehiculos.map((vehiculo, index) => (
                    <div className="card" style={{ width: "18rem", flex: "0 0 auto" }} key={vehiculo.uid}>
                        <img
                            src={store.imagenesVehiculos[index]}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">{vehiculo.name}</h5>
                            <button className="button" data-text="Awesome" onClick={() => navigate(`/vista-vehiculo-individual/${vehiculo.uid}/${index}`)}>
                                <span className="actual-text">&nbsp;Info&nbsp;</span>
                                <span aria-hidden="true" className="hover-text">&nbsp;Info&nbsp;</span>
                            </button>
                            <button className="fav" onClick={() => {
                                actions.añadirFavoritos(vehiculo.name);
                                alert(`${vehiculo.name} has been added to your favorites ❤️`);
                            }}>
                                <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" className="icon">
                                    <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="botones-scroll">
                <button className="scroll left" onClick={handleScrollLeft}>
                    {/* Botón de scroll hacia la izquierda */}
                    <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
                        <path d="M278.6 406.6c-12.5 12.5-12.5 32.8 0 45.3 12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3l-192-192c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L418.7 256 278.6 406.6z" />
                    </svg>
                </button>
                <button className="scroll right" onClick={handleScrollRight}>
                    {/* Botón de scroll hacia la derecha */}
                    <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
                        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                    </svg>
                </button>
            </div>
        </>
    );
};
