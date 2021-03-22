import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1 style={style}>{title}</h1>
      <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />
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
