import React from 'react'
import { ContextHOC } from '../../context';
import Form from '../form';
import './index.scss'

const Canvas = (props) => {
    return(
        <>
        <div className="canvas-wrapper"  id="canvas"
        onDragOver={(event) => {
            event.stopPropagation();
            event.preventDefault();
        }}
        onDrop= {(event) => {
            props.setForm(event.clientX, event.clientY)
            props.toggleForm()
        }}></div>
        {props.showForm ? ContextHOC(Form): null }
        </>
    )
}

export default Canvas