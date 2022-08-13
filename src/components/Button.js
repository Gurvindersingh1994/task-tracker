export const Button = ({ text }) => {
  return (
    <button className="btn">
      <span style={{ fontSize: "1.2rem" }}>{text}</span>
    </button>
  );
};

Button.defaultProps = {
  text: "Default Button",
};
