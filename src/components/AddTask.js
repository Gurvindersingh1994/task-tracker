import PropTypes from "prop-types";
import { useState } from "react";

export const AddTask = ({ onAdd }) => {
	//create states with default empty as value
	const [id, addId] = useState("");
	const [description, addDescription] = useState("");
	const [dayTime, addDayTime] = useState("");
	const [priority, addPriority] = useState("");

	//onSubmit
	const onSubmit = (e) => {
		e.preventDefault();

		if (!description) {
			alert("Nothing to Add");
			return;
		}

		onAdd({ id, description, dayTime, priority });

		//To clear the values, but right it is not working
		addId("");
		addDescription(" ");
		addDayTime(" ");
		addPriority(" ");
	};

	return (
		<form className="newTask-form" onSubmit={onSubmit}>
			<label type="text" className="form-label">
				ID
			</label>
			<input
				type="text"
				placeholder="Enter Id"
				className="form-input"
				onChange={(e) => addId(e.target.value)}
			/>
			<label type="text" className="form-label">
				New Task
			</label>
			<input
				type="text"
				placeholder="Enter Task"
				className="form-input"
				onChange={(e) => addDescription(e.target.value)}
			/>
			<label type="text" className="form-label">
				Day & Time
			</label>
			<input
				type="text"
				placeholder="Day & Time"
				className="form-input"
				onChange={(e) => addDayTime(e.target.value)}
			/>
			<label type="text" className="form-label">
				Priority
			</label>
			<input
				type="text"
				placeholder="Set Priority"
				className="form-input"
				onChange={(e) => addPriority(e.target.value)}
			/>
			<input
				type="submit"
				value="Save Task"
				className="submitButton btn"
				style={{ marginTop: "1rem" }}
			/>
		</form>
	);
};

AddTask.propTypes = {
	id: PropTypes.number,
	description: PropTypes.string,
	dayTime: PropTypes.string,
	priority: PropTypes.string,
};
