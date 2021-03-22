import React from 'react'
import Form from '../form';
import './index.scss'

const Canvas = (props) => {
    return(
        <>
        <div className="canvas-wrapper" 
        onDragOver={(event) => {
            event.stopPropagation();
            event.preventDefault();
        }}
        onDrop= {(event) => {
            console.log(event.clientX, event.clientY)
            props.toggleForm()
        }}>Left Pane</div>
        {props.shwowForm ? <Form />: null }
        </>
    )
}

export default Canvas