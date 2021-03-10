import React from 'react';
import Shop from './Shop';

const Header =(props) =>{

    console.warn("props of header",props);
    return(
        <>
           <div className="header">
               <div>
               {/* <img className="header_img" src="https://www.pinclipart.com/picdir/middle/403-4036378_online-on-demand-courses-that-help-you-sell.png" alt=""/> */}
               <h1> Welcome To The Book World's  <span className="shopingCard"><Shop /><sup className="numbers">{props.Data.AddToCartFunction.length}</sup></span> </h1>
                                
           </div>
           </div>
        </>
    )
}

export default Header;