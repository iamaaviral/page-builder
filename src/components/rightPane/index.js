import React from 'react'
import './index.scss'

const Component = () => {
    return(
        <div className="comp-wrapper">
            <div className="header">BLOCKS</div>
            <div className="comp-item" draggable="true" onDragStart={(e) => console.log(e)}>Label</div>
            <div className="comp-item" draggable="true">Input</div>
            <div className="comp-item" draggable="true">Button</div>
        </div>
    )
}
export default Component