import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PersonajeIndividual } from "../component/personajeIndividual";

export const VistaPersonajeIndividual = props => {
	const { store, actions } = useContext(Context);
	return (
		<PersonajeIndividual />
	);
};