import React from 'react'
import './index.scss'

const Canvas = () => {
    return(
        <div className="canvas-wrapper" 
        onDragOver={(event) => {
            event.stopPropagation();
            event.preventDefault();
        }}
        onDrop= {(e) => {
            console.log(e.clientX, e.clientY)
        }}>Left Pane</div>
    )
}

export default Canvas