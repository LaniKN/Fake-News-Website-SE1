import React from 'react';
import noBitches from '../Components/img/bitches.png';
import './modal.css';


const Modal = ({open, onClose}) => {
    if(!open) return null;
    return (

        <div>
            <div onClick={onClose} className='overlay'>

                <div onClick={(e) => {
                    e.stopPropagation()
                }} className="modalContainer">
                    <img src={noBitches} alt='none'/>
                    <div className="modalRight">
                        <p onClick={onClose} className="closeBtn">X</p>
                        <div className='content'>
                            <h1>Evidence: live footage</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal