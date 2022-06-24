import PropType from 'prop-types';

function Button({ children, version, type, isDisabled}) {
    return (
        <button className={'btn btn-${version}'} type={type} disabled={isDisabled}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    type: 'button',
    isDisabled: false,
    version: 'primary',
};

Button.propTypes = {
    type: PropType.string,
    isDisabled: PropType.bool,
    version: PropType.string,
    children: PropType.node.isRequired,
};

export default Button;