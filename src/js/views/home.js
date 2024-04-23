import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CartaPersonajes } from "../component/cartaPersonajes";
import { CartaPlanetas } from "../component/cartaPlanetas";
import { CartaVehiculos } from "../component/cartaVehiculos";


import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router";

export const Home = () => {
	const { store, actions } = useContext(Context);

return (
	<div className="text-center mt-5">
		<h1>CHARACTERS</h1>
		<div>
			<CartaPersonajes />
		</div>
		<h1>PLANETS</h1>
		<div>
			<CartaPlanetas/>
		</div>
		<h1>VEHICLES</h1>
		<div>
			<CartaVehiculos />
		</div>
	</div>
)
};