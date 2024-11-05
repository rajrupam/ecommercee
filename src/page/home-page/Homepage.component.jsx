import React from "react";

import './home-page.style.css'
import MenuItem from "../../components/MenuItem";

const HomePage=({productCategories})=>{
    return(

        <div className="home-page">
            <h1>Welcome to my home page</h1>
            <div className="directory-menu">
             {productCategories?.map((productCategory,index)=>(
               <MenuItem key={productCategory.id} productCategory={productCategory}/>
             ))}

            </div>

        </div>
    )
}

export default HomePage;