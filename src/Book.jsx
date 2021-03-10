import React, { useState } from 'react';
import FirstSection from './FirstSection';
import BookComponent from './BookComponent';
import Data from './collectionBookImg';
import './mainBook.css';
import Header from './Header';
import Shop from './Shop';
import HeaderContainer from './containers/headerContainer';
import Axios from 'axios';





const Book = (props) =>{
    console.warn("Book props" ,props);
    
    const [name,setName]=useState("");
    const [emails,setEmails]=useState(" ");
    const [phons,setPhons]=useState(" ");
    const [pass,setPass]=useState("");

    const submitFun = () =>{

        const result = Axios.post("http://localhost:2002/api",{
            Name : name,
            Email : emails,
            Phone : phons,
            Password :pass
        })
        setName();
        setPhons();
        setPhons();

        console.warn("Axios result",result);
        
    }


    return(
             <>
              <HeaderContainer/>
              <div class="container pt-2">
                    <div class="row">

                          <div class="col-md-2 first order-lg-0  order-md-0 order-2">
                                  <div className="col-md-12 mb-5 mt-3  common ">
                                    <FirstSection/>  
                                  </div>
                          </div>
                       
                          <div class="col-md-7  order-lg-1  order-md-1 order-0">
                                   <div className="col-md-12  common container-fluid ">
                                       <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-12 ">
                                                <div className="row">
                                                    
                                                    
                                                    
                                                     {Data.map((value)=>{
                                                         return(
                                                            
                                                            <BookComponent
                                                         
                                                            imegs = {value.img}
                                                            bookName={value.bookName}
                                                            addToCartFunc={()=>{props.AddToCardHandlers({Name:"subham"})}}
   
                                                            />
                                                            
                                                         )
                                                     })}

                                                    
                                                </div>
                                            </div>
                                        </div>
                                        </div> 
                                   </div>
                          </div>
    


                         <div className="col-md-3  order-lg-2  order-md-2 order-1">

                             
                            <div className="col-md-12 see container common col-md-mb-5">
                            
                              {/* <input type="text" placeholder="Enter Name" name="name" /><br/>
                              <input type="email" placeholder="Enter Email" name="email"/><br/>
                              <input type="text" placeholder="Phone No" name="phone"/><br/>
                              */}
                              <div class="mb-2">
                              <label for="formGroupExampleInput"  class="form-label">FULL NAME</label>
                              <input type="text"  onChange={(e)=>{setName(e.target.value)}} class="form-control"  placeholder="Enter Name" value={name}/>
                              </div>

                              <div class="mb-2">
                              <label for="formGroupExampleInput2" class="form-label">EMAIL </label>
                              <input type="email" onChange={(e)=>{setEmails(e.target.value)}} class="form-control"  placeholder="Enter Email" value={emails}/>
                              </div>

                              <div class="mb-2">
                              <label for="formGroupExampleInput2" class="form-label">PHONE</label>
                              <input type="text" onChange={(e)=>{setPhons(e.target.value)}} class="form-control"  placeholder="Enter Phone" value={phons}/>
                              </div>

                              <div class="mb-2">
                              <label for="formGroupExampleInput2" class="form-label">PASSWORD </label>
                              <input type="password" onChange={(e)=>{setPass(e.target.value)}} class="form-control"  placeholder="Enter Password" value={pass}/>
                              </div>

                              <div>
                                  <button type="button" onClick={submitFun} className="btn btn-success mt-2 mb-2">submit</button>
                              </div>

                              </div>
                               <br/><br/>
                              <button type="button" className="btn btn-primary" >click me</button><hr/>
                              <button type="button">GooGle</button><br/><br/><br/>
                                
                           </div>

                    </div>
                </div>

             </>
          )
}

export default Book;