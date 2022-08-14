import { useState } from "react";
import { name } from "./Header"; //importing variables
import { Button } from "./Button";
import { Tasks } from "./Tasks";
import { AddTask } from "./AddTask";

export const Body = () => {
	const [showAddTaskButton, setShowAddTaskButton] = useState(false);
	const [taskList, setTasks] = useState([
		{
			id: 0,
			description: "Call Equifax",
			dayTime: " Coming Monday on 12 PM",
			priority: "4",
		},
		{
			id: 1,
			description: "Rotate Mattress",
			dayTime: "Today on 2 PM",
			priority: "1",
		},
		{
			id: 2,
			description: " Study JS",
			dayTime: "Tomorrow on 5 PM",
			priority: "3",
		},
		{
			id: 3,
			description: "Finish FAN Article page",
			dayTime: "Coming Monday on 4PM",
			priority: "2",
		},
	]);

	//Delete task
	const deleteTask = (id) => {
		setTasks(taskList.filter((taskList) => taskList.id !== id));
	};

	//Add task
	const addTask = (task) => {
		console.log(task);
		const newTask = { ...task };
		setTasks([...taskList, newTask]);
	};

	return (
		<div className="site-body">
			<div className="taskType">
				<h1 style={Color}>{name}</h1>
				<Button
					text="Add Task"
					onAdd={() => setShowAddTaskButton(!showAddTaskButton)}
					showAddTaskButton={showAddTaskButton}
				/>
			</div>
			{showAddTaskButton && <AddTask onAdd={addTask} />}
			{taskList.length > 0 ? (
				<Tasks taskProp={taskList} onDelete={deleteTask} />
			) : (
				"No tasks to show right now"
			)}
		</div>
	);
};

//NOTE: Inline CSS and CSS in JS will be loaded over-ride the CSS written in differnt file.
//CSS in JS
const Color = {
	color: "black",
};
