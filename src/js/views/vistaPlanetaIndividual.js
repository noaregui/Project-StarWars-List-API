import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PlanetaIndividual } from "../component/planetaIndividual";

export const VistaPlanetaIndividual = props => {
	const { store, actions } = useContext(Context);

	return (
		<PlanetaIndividual />
	);
};