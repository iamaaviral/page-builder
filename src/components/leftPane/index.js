import React from 'react'
import { ContextHOC } from '../../context';
import Form from '../form';
import './index.scss'

const Canvas = (props) => {

    const handleKeyPress = (e,i) => {
        e.preventDefault();
        if(e.keyCode === 46) {
            props.delItemList(i)
            props.setEdit(false)
        }
        if(e.key === 'Enter') {
            props.editForm()
            props.toggleForm()
        }
    }
    return(
        <>
        <div className="canvas-wrapper"  id="canvas"
        onDragOver={(event) => {
            event.stopPropagation();
            event.preventDefault();
        }}
        onDrop= {(event) => {
            if(!props.edit) {
                props.setForm(event.clientX, event.clientY)
                props.toggleForm()
            } else {
                props.onDrop(event.clientX, event.clientY)
                // props.setForm(event.clientX, event.clientY)
                // console.log(props.formInput)
                // props.setItemList()
            }
        }}>
            {props.itemList.map((list, index) => {
            return <list.type
                        className={`each-list ${props.selectedIndex === index ? 'selected' : ''}`}
                        onClick={() => {props.setEdit(true); props.setSelectedIndex(index)}}
                        onKeyDown={(e) => {handleKeyPress(e,index)}}
                        tabIndex={props.type === "p" ? 0 : 1}
                        draggable={true}
                        onDragStart={() => {props.setEdit(true); props.setSelectedIndex(index)}}
                        id={index}
                        key={index}
                        style={{
                            position: 'absolute',
                            left: `${list.x}px`,
                            top: `${list.y}px`,
                            fontSize: `${list.size}px`,
                            fontWeight: list.weight
                        }}>{list.type  !== 'input' ? list.text : null}</list.type>
        })}
        </div>
        {props.showForm ? ContextHOC(Form): null }
        </>
    )
}

export default Canvas