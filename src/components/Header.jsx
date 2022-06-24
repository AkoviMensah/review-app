import PropType from 'prop-types';
function Header( {text}) {
  return (
    <div className="container">
      <h1>{text}</h1>
    </div>
  );
}

Header.defaultProps = {
    text: "My app UI",
};

Header.propType = {
    text: PropType.string
}

export default Header;
