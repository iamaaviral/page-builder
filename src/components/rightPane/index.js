import React from 'react'
import './index.scss'

const Component = (props) => {
    return(
        <div className="comp-wrapper">
            <div className="header">BLOCKS</div>
            <div className="comp-item" draggable="true" id="p" onDragStart={(e) => props.setType(e.target.id)}>Label</div>
            <div className="comp-item" draggable="true" id="input" onDragStart={(e) => props.setType(e.target.id)}>Input</div>
            <div className="comp-item" draggable="true" id="button" onDragStart={(e) => props.setType(e.target.id)}>Button</div>
        </div>
    )
}
export default Component