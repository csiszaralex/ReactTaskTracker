import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <header className='header'>
      <h1 style={style}>{props.title}</h1>
      <button className='btn'>Add</button>
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
