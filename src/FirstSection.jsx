import React, { useState } from 'react';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';
const FirstSection = () =>{
    const [thump,setThump]=useState(0);

    const ThumpFunc = (str) =>{
       (str=='up') ? setThump(thump+1): setThump(thump-1);
    }

    return(
        <><br/><br/><br/>
        <div className="first_grid_area">

        <p>This website has been basically created for <strong>Book Store </strong>
         where You can get a lots of Book</p>

         <p>If you like this website please like </p>
         <p>And comment below</p>
         
          <ThumbUpOutlinedIcon onClick={()=>{ThumpFunc('up')}}/>   < ThumbDownOutlinedIcon onClick={()=>{ThumpFunc('down')}}/>
          <br/> {thump}<br/> 
         <CommentRoundedIcon/>
         <br/><br/><br/>

          </div>
        </>
    )
}

export default FirstSection;