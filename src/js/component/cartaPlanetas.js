import React, { useEffect, useContext, useRef } from "react";
import { Context } from "../store/appContext"
import { Navigate, useNavigate } from "react-router";

export const CartaPlanetas = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const cardContainerRef = useRef(null);

    useEffect(() => {
        actions.cargarPlanetas();
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
            <div className="card-container" ref={cardContainerRef}>
                {store.planetas.map((planeta, index) => (
                    <div className="card" style={{ width: "18rem" }} key={planeta.uid}>
                        <img src={store.imagenesPlanetas[index]}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">{planeta.name}</h5>
                            <button class="button" data-text="Awesome" onClick={() => navigate(`/vista-planeta-individual/${planeta.uid}/${index}`)}>
                                <span class="actual-text">&nbsp;Info&nbsp;</span>
                                <span aria-hidden="true" class="hover-text">&nbsp;Info&nbsp;</span>
                            </button>
                            <div className="like" title="Like">
                                <input type="checkbox" className="checkbox" id="Give-It-An-Id" onClick={() => {
                                    actions.añadirFavoritos(planeta.name);
                                    alert(`${planeta.name} has been added to your favorites. The force is with you ✨`);
                                }} />
                                <div className="svg-container">
                                    <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                                        </path>
                                    </svg>
                                    <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                                        </path>
                                    </svg>
                                    <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="10,10 20,20"></polygon>
                                        <polygon points="10,50 20,50"></polygon>
                                        <polygon points="20,80 30,70"></polygon>
                                        <polygon points="90,10 80,20"></polygon>
                                        <polygon points="90,50 80,50"></polygon>
                                        <polygon points="80,80 70,70"></polygon>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="botones-scroll">
                <button className="scroll left" onClick={handleScrollLeft}> {/* Botón de scroll hacia la izquierda */}
                    <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
                        <path d="M278.6 406.6c-12.5 12.5-12.5 32.8 0 45.3 12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3l-192-192c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L418.7 256 278.6 406.6z" />
                    </svg>
                </button>
                <button className="scroll right" onClick={handleScrollRight}> {/* Botón de scroll hacia la derecha */}
                    <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
                        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                    </svg>
                </button>
            </div>
        </>
    );
};