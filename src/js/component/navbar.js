import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [contador, setContador] = useState(0); 

    const incrementarContador = () => {
        setContador(contador + 1);
    };

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <img
                    className="imagen"
                    src="https://logowik.com/content/uploads/images/528_star_wars.jpg"
                    alt="logo starwars"
                    style={{ width: '100px', height: 'auto' }}
                />
            </Link>
            <div className="ml-auto">
                <p>Contador: {contador}</p>
                <Link to="/demo">
                    <button className="btn btn-primary">Check the Context in action</button>
                </Link>
            </div>
        </nav>
    );
};