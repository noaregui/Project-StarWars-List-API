import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { VehiculoIndividual } from "../component/vehiculoIndividual";

export const VistaVehiculoIndividual = props => {
	const { store, actions } = useContext(Context);

	return (
		<VehiculoIndividual />
	);
};