import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";

import "./Form.css";

export function Form({ handleSubmit, handleInputChange, novaTarefa }) {
	return (
		<form onSubmit={handleSubmit} method="#" className="form">
			<input onChange={handleInputChange} type="text" value={novaTarefa} />
			<button type="submit">
				<FaPlus />
			</button>
		</form>
	);
}

Form.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	novaTarefa: PropTypes.string.isRequired,
};
