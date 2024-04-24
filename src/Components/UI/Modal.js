import React, { Fragment } from 'react'
import classess from './Modal.module.css'
import ReactDom from 'react-dom'
const Backdrop = (props) =>{
    return(
        <div className={classess.backdrop} onClick={props.onClose}>

        </div>
    )
}
const ModalOverlay = (props) =>{
    
    return(
        <div className={classess.modal}>
            <div className={classess.content}>
                {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById("overlays")

function Modal(props) {
  return (
    <Fragment>
        {ReactDom.createPortal(<Backdrop onClose = {props.onClose}/>,portalElement)}
        {ReactDom.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
        )}
    </Fragment>
  )
}

export default Modal