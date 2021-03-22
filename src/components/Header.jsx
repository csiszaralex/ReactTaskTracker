import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  const onClick = () => {
    console.log("Click!");
  };

  return (
    <header className="header">
      <h1 style={style}>{props.title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracer",
};

Header.propTypes = {
  title: PropTypes.string,
};

const style = {
  color: "#00c",
  backgroundColor: "#99f",
};

export default Header;
