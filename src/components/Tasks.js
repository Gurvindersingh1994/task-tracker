//enter list of tasks using HOOK: 'useState'
import { IndividualTask } from "./IndividualTask";

export const Tasks = ({ taskProp, onDelete }) => {
	return (
		<>
			{taskProp.map((task) => (
				<IndividualTask
					key={task.id}
					individualTaskProp={task}
					deleteTask={onDelete}
				></IndividualTask>
			))}
		</>
	);
};
