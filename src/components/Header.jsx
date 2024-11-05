import React from "react";
import Logo from '../assets/crwns.svg?react';
import ShoppingLogo from '../assets/shopping-bag.svg?react';
// import crown from '../assets/crown.svg';
import './header.scss'
import CartIcon from "./CartIcon/CartIcon";
import { useNavigate } from "react-router-dom";


const Header=()=>{

    const navigate=useNavigate()

    const handleShop=()=>{
        navigate('/shop')
    }
    return(
        <div>
            <div className="header">
                <div className="logo-container">
                    <Logo className='logo'/>

                </div>
                <div className="options">
                    <div className="option" onClick={handleShop}>SHOP</div>
                    <div className="option">SIGN IN</div>
                    <div className="option">CONTACT</div>
                   <CartIcon/>
                </div>

            </div>

        </div>
    )
}

export default Header;