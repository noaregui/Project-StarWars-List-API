import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CartaIndividual } from "../component/cartaIndividual";


export const VistaCartaIndividual = () => ( 
	
	<div className="text-center mt-5">
		<CartaIndividual />
	</div>
);
