import React from "react";
import './menu-item.scss'

const MenuItem=({productCategory})=>{

    const {id,title,imageUrl}=productCategory
    return(
       
             <div className="menu-item">
                    <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}>

                    </div>

                    <div className="content">
                        <div className="title"> {title.toUpperCase()}</div>
                        <div className="subtitle">Shop Now</div>

                    </div>

                </div>
       
    )
}

export default MenuItem