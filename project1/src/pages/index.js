import React from 'react';
import './format.css';
import Cat from '../Components/img/cat.png';
import Modal from './Modal';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Modal4 from './Modal4';
import {useState} from 'react';



const Home = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    const [openModal4, setOpenModal4] = useState(false);


    return (
        <div className="flex">

            <head className = 'titleRow'>
                <h1><b>Home Page</b></h1>
            </head>
        

            <section className ='row'>
            
                <div className="column story">
                
                    <p>Welcome to Queer Takes!! <br />With this webpage you'll find the fruitiest news. There's plenty to do(two whole pages worth!), so don't waste time here! Go ahead and look around at the articles!<br />There's plenty of news that's all completely real! Just for you to find. Here in this demo page, we've included our most popular article published on the 27th! <br />Trust us :D<br />There's something in this webpage for everyone! Even if you may not get all the 'references'</p>
                
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
        <a href="https://www.youtube.com/watch?v=eBGIQ7ZuuiU">
                <img src={Cat} className="cat" alt="fruit cat, i got bored"/>
        </a>
        </div>
        <div className="column break"></div>

        </section>
    </div>
    );
};
            
export default Home;