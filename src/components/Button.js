export const Button = ({ text, onAdd, showAddTaskButton }) => {
	return (
		<>
			<button
				className="btn"
				onClick={onAdd}
				style={{
					backgroundColor: showAddTaskButton && "black",
				}}
			>
				<span style={{ fontSize: "1.2rem" }}>
					{showAddTaskButton ? "Task Being Added" : text}
				</span>
			</button>
		</>
	);
};

Button.defaultProps = {
	text: "Button",
};
