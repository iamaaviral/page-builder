import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const Form = (props) => {
    const save = () => {
        props.setItemList()
        props.toggleForm()
        window.localStorage.setItem('listItem', JSON.stringify(props.itemList));
    }

  const formRoot = document.getElementById("form-root");
  return ReactDOM.createPortal(
    <div className="form-wrapper">
      <div className="form-container">
        <div className="header">{`Edit  ${props.formInput.type}`}<span className="close" onClick={() => {props.toggleForm();props.setSelectedIndex(null)}}>x</span></div>
        <div className="field">
          <div className="title">Text</div>
          <input onChange={(e) => props.setText(e.target.value)} value={props.formInput.text}/>
        </div>
        <div className="field">
          <div className="title">X</div>
          <input onChange={(e) => props.setx(e.target.value)} value={props.formInput.x}/>
        </div>
        <div className="field">
          <div className="title">Y</div>
          <input onChange={(e) => props.sety(e.target.value)} value={props.formInput.y}/>
        </div>
        <div className="field">
          <div className="title">Font Size</div>
          <input onChange={(e) => props.setSize(e.target.value)} value={props.formInput.size}/>
        </div>
        <div className="field">
          <div className="title">Font Weight</div>
          <input onChange={(e) => props.setWeight(e.target.value)} value={props.formInput.weight}/>
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
