import React from 'react';
import deadJava from '../Components/img/tombstone-java.jpg';
import './modal.css';


const Modal3 = ({open, onClose}) => {
    if(!open) return null;
    return (

        <div>
            <div onClick={onClose} className='overlay'>

                <div onClick={(e) => {
                    e.stopPropagation()
                }} className="modalContainer">
                    <img src={deadJava} alt='still dead' className="imgModal"/>
                    <div className="modalRight">
                        <p onClick={onClose} className="closeBtn">X</p>
                        <div className='content'>
                            <h1>Nah it's still dead.</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal3