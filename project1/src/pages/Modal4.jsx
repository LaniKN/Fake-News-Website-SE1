import React from 'react';
import kitten from '../Components/img/kittennotouch.jpg';
import './modal.css';


const Modal4 = ({open, onClose}) => {
    if(!open) return null;
    return (

        <div>
            <div onClick={onClose} className='overlay'>

                <div onClick={(e) => {
                    e.stopPropagation()
                }} className="modalContainer">
                    <img src={kitten} alt='not this one' className="imgModal"/>
                    <div className="modalRight">
                        <p onClick={onClose} className="closeBtn">X</p>
                        <div className='content'>
                            <h1>Dont click the rainbow flag cat.</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal4