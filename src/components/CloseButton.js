// import { FaTimes } from "react-icons/fa";

export const CloseButton = ({ closeTask, task }) => {
	return (
		<button className="close-icon btn" onClick={() => closeTask(task.id)}>
			Delete Task
		</button>
	);
};
