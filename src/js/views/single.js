import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PlanetaIndividual } from "../component/planetaIndividual";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();

	useEffect (() => {
		actions.cargarPlanetaIndividual(theid)
	}, [])

	return (
		<PlanetaIndividual />
	);
};