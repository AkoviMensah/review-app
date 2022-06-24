import PropType from 'prop-types';
function Header( {text, bgColor, textColor}) {
  const styles_header = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={styles_header}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
    text: "My app UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
};

Header.propType = {
    text: PropType.string,
    bgColor: PropType.string,
    textColor: PropType.string,
};

export default Header;
