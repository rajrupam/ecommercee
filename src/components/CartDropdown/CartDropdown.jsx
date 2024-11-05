import React from "react";

import ShoppingLogo from '../../assets/shopping-bag.svg?react';
// import crown from '../assets/crown.svg';
import './cartdropdown.scss'


const CartDropdown=()=>{
    return(
       <div className="cart-dropdown">
      <div className="cart-items"></div>
      <button>CHECKOUT</button>
     </div>
       
    )
}

export default CartDropdown;