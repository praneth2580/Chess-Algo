import React, { useEffect, useState } from 'react';
import success from '../assets/success.svg';
import info from '../assets/info.svg';
import error from '../assets/error.svg';
import close from '../assets/close.svg';

function Alert(props) {
    
    const show = props.show;
    const type = props.type;
    const title = props.title;
    const desc = props.desc;

    useEffect(() => {
        if (show) {
            setTimeout(() => {
                props.onClose();
            },3000)
        }
    }, [show])

    return <div className={'alert-container ' + (type == 0 ? "success" : type == 1 ? "info" : "error") + (show ? " active" : "")}>
        <div className='alert-img-container'>
            <img src={type == 0 ? success : type == 1 ? info : error} className="alert-img"/>
        </div>
        <div className='alert-text-container'>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
        <div className='alert-close-container' onClick={props.onClose}>
            <img src={close} className="alert-close"/>
        </div>
    </div>
}

export default Alert;