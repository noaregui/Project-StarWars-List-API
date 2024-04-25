import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { cartaPlanetas } from "./component/cartaPlanetas";
import { cartaPersonajes } from "./component/cartaPersonajes";
import { cartaVehiculos } from "./component/cartaVehiculos";

import { VistaPersonajeIndividual } from "./views/vistaPersonajeIndividual";
import { VistaPlanetaIndividual } from "./views/vistaPlanetaIndividual";
import { VistaVehiculoIndividual } from "./views/vistaVehiculoIndividual";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/vista-personaje-individual/:uid/:numero" element={<VistaPersonajeIndividual />} />
						<Route path="/vista-planeta-individual/:uid/:numero" element={<VistaPlanetaIndividual />} />
						<Route path="/vista-vehiculo-individual/:uid/:numero" element={<VistaVehiculoIndividual />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

{/* <Route path="/cartaIndividual" element={<VistaCartaIndividual />}></Route> */}