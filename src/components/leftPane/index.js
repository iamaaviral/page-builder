import React from 'react'
import { ContextHOC } from '../../context';
import Form from '../form';
import './index.scss'

const Canvas = (props) => {

    const handleKeyPress = (e,i) => {
        e.preventDefault();
        if(e.keyCode === 46) {
            props.delItemList(i)
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
            props.setForm(event.clientX, event.clientY)
            props.toggleForm()
        }}>
            {props.itemList.map((list, index) => {
            // var para = document.createElement(list.type);
            // var t = document.createTextNode(list.text);
            // para.appendChild(t);
            // para.style.position = 'absolute'
            // para.style.left = `${list.x}px`
            // para.style.top = `${list.y}px`
            // para.style.fontSize = `${list.size}px`
            // para.style.fontWeight = list.weight
            // console.log(para)
            return <list.type
                        className={`each-list ${props.selectedIndex === index ? 'selected' : ''}`}
                        onClick={() => props.setSelectedIndex(index)}
                        onKeyDown={(e) => {handleKeyPress(e,index)}}
                        tabIndex={props.type === "p" ? 0 : 1}
                        draggable={true}
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