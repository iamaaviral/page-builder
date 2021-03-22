import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss'

const Form = () => {
    const formRoot = document.getElementById('form-root')
    return ReactDOM.createPortal(
        <div className="form-wrapper">Form</div>,formRoot
    )
}

export default Form