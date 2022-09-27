import React from 'react';
import './format.css';
import Cat from '../Components/img/cat.png';
import Modal from './Modal';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Modal4 from './Modal4';
import {useState} from 'react';
import girlAutumn from '../Components/img/teen_autumn.jpg';

 
const ArtMain = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    const [openModal4, setOpenModal4] = useState(false);

    return (
        <div className="flex">

            <head className = 'titleRow'>
                <h1><b>Shocked Researchers Discover the Affects of Autumn on Teenage Gowrls</b></h1>
            </head>

            <section className ='row'>
            
            <div className="column story">
                <img src={girlAutumn} className="artImg" alt="fall"/>
                <p>Mercury in Retrograde?</p>
                <p>You may not know it but teenage girls do! regular autumn is old news, get ready for the upcoming “Christian Girl Autumn” (also previously known as a basic white girl in fall) if you are wondering when autumn starts, have no fear, take a look around. </p>
                <p>If you notice an increase in sweaters, flannels, and pumpkin spice lattes you are in the holy season of autumn. Researchers had no idea of the movement until concerned callers voiced their opinions. One caller asked why she was suddenly wearing a flannel after enjoying her pumpkin spice latte. Another asked why she was taking an extensive amount of pictures in a pumpkin patch after having her morning coffee. </p>
                <p>Researchers came to a conclusion and found the “spice” in pumpkin spice affects the normal part of your brain to act out involuntarily leading to a person participating in Christian Girl Autumn. Unfortunately, there is no cure yet however Mariah Carey Christmas is just around the corner.
</p>

            </div>
            
            <div className="column break"></div>

            <div className='column'>
                <div className='adsCol'>

                    <div className='ad'>
                        <div>
                            <h1>Studies Say They've Found a New Angle on Anguluar!!</h1>
                            <button onClick ={() => setOpenModal2(true)}>Click Here!</button>
                            <Modal2 open = {openModal2} onClose={() => setOpenModal2(false)}/>
                        </div>
                    </div>

                    <div className='ad'>
                        <div>
                            <h1>Are Zodiac Signs Bullshit? The Real Reason you get no Bitches</h1>
                            <button onClick ={() => setOpenModal(true)}>Click Here!</button>
                            <Modal open = {openModal} onClose={() => setOpenModal(false)}/>
                        </div>
                    </div>

                    <div className='ad'>
                        <div>
                            <h1>Research finding that Java is coming back to life? What is happening to this zombie language?</h1>
                            <button onClick ={() => setOpenModal3(true)}>Click Here!</button>
                            <Modal3 open = {openModal3} onClose={() => setOpenModal3(false)}/>
                        </div>
                    </div>

                    <div className='ad'>
                        <div>
                            <h1>Cats are clickable?! Discoveries say to click the Cats!</h1>
                            <button onClick ={() => setOpenModal4(true)}>Click Here!</button>
                            <Modal4 open = {openModal4} onClose={() => setOpenModal4(false)}/>
                        </div>
                    </div>

                </div>
            
            </div>


        </section>
        <section className="row">
        <div className="column break"></div>
        <div className="column">
        <a href="https://www.youtube.com/watch?v=xHotXbGZiFY">
                <img src={Cat} className="cat" alt="fruit cat, i got bored"/>
        </a>
        </div>
        <div className="column break"></div>

        </section>


    </div>
    );
};

export default ArtMain;