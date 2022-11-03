import React from 'react';


const Button = ({text, color, onClick}) => {
    return (
        <button type="submit" className="btn" style={{background: color, color: 'white'}}
                onClick={onClick}>{text}
        </button>
    );
};

Button.defaultProps = {
    color: 'green',
}

export default Button;
