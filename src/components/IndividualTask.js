import { CloseButton } from "./CloseButton";

export const IndividualTask = ({ individualTaskProp, deleteTask }) => {
	return (
		<div className="singleTask">
			<div className="taskInfo">
				<h4 style={{ margin: "0" }}>
					Task {individualTaskProp.id} : {individualTaskProp.description}
				</h4>
				<p style={{ margin: "0", fontWeight: "400" }}>
					{individualTaskProp.dayTime}, Priority No.-
					{individualTaskProp.priority}
				</p>
			</div>
			<CloseButton closeTask={deleteTask} task={individualTaskProp} />
		</div>
	);
};
