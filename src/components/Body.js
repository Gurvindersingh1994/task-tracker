import { name } from "./Header"; //importing vatiables
import { Button } from "./Button";
export const Body = () => {
  return (
    <div className="site-body">
      <div className="taskType">
        <h1 style={Color}>{name}</h1>
        <Button text="Add Task" />
      </div>
    </div>
  );
};

//NOTE: Inline CSS and CSS in JS will be loaded over-ride the CSS written in differnt file.
//CSS in JS
const Color = {
  color: "black",
};
