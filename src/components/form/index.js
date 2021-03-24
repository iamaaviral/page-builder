import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const Form = (props) => {
  const save = () => {
    props.setItemList();
    props.toggleForm();
  };

  const formRoot = document.getElementById("form-root");
  return ReactDOM.createPortal(
    <div className="form-wrapper">
      <div className="form-container">
        <div className="header">
          {`Edit  ${
            props.formInput.type === "p" ? "Label" : props.formInput.type
          }`}
          <span
            className="close"
            onClick={() => {
              props.toggleForm();
              props.setSelectedIndex(null);
            }}
          >
            x
          </span>
        </div>
        <div className="field">
          <div className="title">Text</div>
          <input
            name="text"
            onChange={(e) => props.setFormValue(e.target.name, e.target.value)}
            value={props.formInput.text}
          />
        </div>
        <div className="field">
          <div className="title">X</div>
          <input
            name="x"
            onChange={(e) => props.setFormValue(e.target.name, e.target.value)}
            value={props.formInput.x}
          />
        </div>
        <div className="field">
          <div className="title">Y</div>
          <input
            name="y"
            onChange={(e) => props.setFormValue(e.target.name, e.target.value)}
            value={props.formInput.y}
          />
        </div>
        <div className="field">
          <div className="title">Font Size</div>
          <input
            name="size"
            onChange={(e) => props.setFormValue(e.target.name, e.target.value)}
            value={props.formInput.size}
          />
        </div>
        <div className="field">
          <div className="title">Font Weight</div>
          <input
            name="weight"
            onChange={(e) => props.setFormValue(e.target.name, e.target.value)}
            value={props.formInput.weight}
          />
        </div>
        <div className="field">
          <div className="btn" onClick={() => save()}>
            Save changes
          </div>
        </div>
      </div>
    </div>,
    formRoot
  );
};

export default Form;
