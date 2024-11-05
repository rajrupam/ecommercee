import React, { useState } from "react";

import ShoppingLogo from '../../assets/shopping-bag.svg?react';
// import crown from '../assets/crown.svg';
import './carticon.scss'
import CartDropdown from "../CartDropdown/CartDropdown";


const CartIcon=()=>{
    const [hidden,setHidden]=useState(false);

    const handleDropdown=()=>{
        setHidden(!hidden)
    }
    return(
       <div className="cart-icon">
        <ShoppingLogo className='shopping-icon' onClick={handleDropdown}/>
        {
         !hidden? null: <CartDropdown/>
        }

       </div>
       
    )
}

export default CartIcon;