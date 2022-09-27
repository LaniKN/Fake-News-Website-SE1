import React from 'react';
import rightAngle from '../Components/img/right_one.png';
import './modal.css';


const Modal2 = ({open, onClose}) => {
    if(!open) return null;
    return (

        <div>
            <div onClick={onClose} className='overlay'>

                <div onClick={(e) => {
                    e.stopPropagation()
                }} className="modalContainer">
                    <img src={rightAngle} alt='correct'/>
                    <div className="modalRight">
                        <p onClick={onClose} className="closeBtn">X</p>
                        <div className='content'>
                            <h1>Evidence: They found the Right one :D</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal2