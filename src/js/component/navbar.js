import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const [contador, setContador] = useState(0);
    const { actions, store } = useContext(Context)

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
                <div class="dropdown">
                    <button class="button-dropdown">Favs 🪐 &nbsp; ▼</button>
                    <div class="dropdown-content">
                    {store.favoritos?.map((favorito,index) => {
                            return (
                                <a id="top" href="#">{favorito}</a>
                            )
                        })}                     
                       
                    </div>
                </div>

                {/* <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Fav 🤺🤖🪐🚀
                    </button>
                    <ul className="dropdown-menu">
                        {store.favoritos?.map((favorito,index) => {
                            return (
                                <li><div className="dropdown-item p-2">{favorito}</div></li>
                            )
                        })}                     
                    </ul>
                </div> */}
            </div>
        </nav>
    );
};