export const name = "Daily Task"; // exported variable
// import PropTypes from "prop-types";

//function based component syntax: using destructing
export const Header = ({ title }) => {
  return (
    <header className="header">
      {/* inline styling (css) used here for h1 */}
      <h1 style={{color:'white'}}>First React Project - {title} </h1>
    </header>
  );
};

//Proptypes -- to check the props type (whether it is number, string or boolen)
// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

//default props -- To set default value to prop if nothing is passed.
// Header.defaultProps = {
//   title: "Year 2022",
// };

// IMPORTANT: If you are exporting a variable (or an arrow function) as a default export, you have to declare it on 1 line and export it on the next. You can't declare and default export a variable on the same line
