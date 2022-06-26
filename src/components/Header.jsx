import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    color: textColor,
    backgroundColor: bgColor,
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <Link to='/' style={{ textDecoration: "none", color: "#ff6a95" }}>
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Reviews",
  textColor: "#ff6a95",
  bgColor: "rgba(0,0,0,0.4)",
  
}

Header.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  
}

export default Header;