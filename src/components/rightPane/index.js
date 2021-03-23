import React from 'react'
import './index.scss'

const Component = (props) => {

    const onDrag = (id) => {
        props.setType(id);
        props.setEdit(false);
    }

    return(
        <div className="comp-wrapper">
            <div className="header">BLOCKS</div>
            <div className="comp-item" draggable="true" id="p" onDragStart={(e) => onDrag(e.target.id)}>Label</div>
            <div className="comp-item" draggable="true" id="input" onDragStart={(e) => onDrag(e.target.id)}>Input</div>
            <div className="comp-item" draggable="true" id="button" onDragStart={(e) => onDrag(e.target.id)}>Button</div>
        </div>
    )
}
export default Component