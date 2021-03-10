import React,{useState} from 'react';
import './mainBook.css';
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';


const BookComponent = (props) =>{

   const [color,setColor]=useState(false);
   const callFun = () =>{
     setColor(true);
   }

   const [thumbUp,setThumbUp]=useState(false);
          const thumbUpFun = () =>{
            setThumbUp(true);
          }
  
  const [thumDown,setThumbDown]=useState(false);
          const thumbDownFun = () =>{
            setThumbDown(true);
          }






    return(

        <>

                <div className="col-md-6 col-lg-4 col-sm-12 ">
                   
                    <div className="m-2 bookCard">
   
                        <img  src={props.imegs} className="card-img-top imgs" alt="error"/>

                      <span className="">{props.bookName}</span><br/>
                      <span><StarOutlineOutlinedIcon onClick={callFun} className={color ? 'background-red' : 'background-blue'} /> <StarOutlineOutlinedIcon/> <StarOutlineOutlinedIcon/> <StarOutlineOutlinedIcon/> <StarOutlineOutlinedIcon/></span>
                    <br/>
                    <ThumbUpOutlinedIcon onClick={thumbUpFun} className={thumbUp ? 'fillColorUp':null}/>   < ThumbDownOutlinedIcon onClick={thumbDownFun} className={thumDown ? 'fillColorDown':null}/>
                   
                    <div>
                    <button type="button" className="btn btn-danger" onClick={()=> {props.addToCartFunc()}}>AddToCart</button>
                    </div><hr/>
                    </div>
                </div>

   
                   
        </>

          )
}


export default BookComponent;