import React from "react";
import cn from 'classnames';

const Alert = ({type, text}) => {
    let alertClass = cn('alert', {
        [`btn-${type}`]: type,
    })
    return(
        <div className={alertClass} role="alert">{text}</div>
    )
}

Alert.defaultProps = {
    type: 'primary',
    text: 'hello world'
}

export default Alert