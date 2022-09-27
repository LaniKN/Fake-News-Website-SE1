import React from 'react';
import '../../pages/format.css';
import Logo from '../img/QT_logo.png';
import {
    Nav,
    NavLink,
    NavMenu
} from './NavbarElements';

const Navbar = () => {

    return (
        <>
            <Nav>

                    <NavMenu>
                        <NavLink to ='/queer-takes' activeStyles>
                            <img src={ Logo } alt ="Home" height="80px" width="80px" className="logoStyle"/>
                        </NavLink> 
                        <NavLink to='/9-27-article-1' activeStyles>
                            9/27/22 - Article 1
                        </NavLink>
            </NavMenu>

            </Nav>
        </>


    );
};

export default Navbar;
