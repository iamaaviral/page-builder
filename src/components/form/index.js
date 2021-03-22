import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const Form = (props) => {
    const save = () => {
        var para = document.createElement(props.type);
        var t = document.createTextNode("This is a paragraph.");
        para.appendChild(t);
        para.style.position = 'absolute'
        para.style.left = `${props.formInput.x}px`
        para.style.top = `${props.formInput.y}px`
        var elem = document.getElementById('canvas');
        elem.appendChild(para)
        props.toggleForm()
    }

  const formRoot = document.getElementById("form-root");
  return ReactDOM.createPortal(
    <div className="form-wrapper">
      <div className="form-container">
        <div className="header">Edit Label <span className="close" onClick={() => props.toggleForm()}>x</span></div>
        <div className="field">
          <div className="title">Text</div>
          <input />
        </div>
        <div className="field">
          <div className="title">X</div>
          <input value={props.formInput.x}/>
        </div>
        <div className="field">
          <div className="title">Y</div>
          <input value={props.formInput.y}/>
        </div>
        <div className="field">
          <div className="title">Font Size</div>
          <input />
        </div>
        <div className="field">
          <div className="title">Font Weight</div>
          <input />
        </div>
        <div className="field">
            <div className="btn" onClick={() => save()}>Save changes</div>
        </div>
      </div>
    </div>,
    formRoot
  );
};

export default Form;
