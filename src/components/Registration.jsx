import React, { useState } from 'react'
import superImage from "../assests/superImage.png"
import './registration.css'



function Registration() {
 const[formValues,setFormValues] = useState({
    name: "",
    userName :"",
    email : "",
    mobile : ""
 })

 function handleChange(e){
   const {name,value} = e.target

   setFormValues({
    ...formValues,
    [name]:value
   })
 }


  return (
    <div className='container'>
    <div className='left-div'>
        <img src={superImage} alt="superimg"  />
        <p>Discover new things on Superapp</p>
    </div>
    <div className='right-div'>
        <h1>Super app</h1>
        <p>Create your new account</p>
        <div className='inputFields'>
            <input type="text" placeholder='Name' name='name' onChange={handleChange} value={formValues.name}/>
            <input type="text" placeholder='UserName' name='userName' value={formValues.userName} />
            <input type="email" placeholder='Email' name='email' value={formValues.email} />
            <input type="number" placeholder='Mobile' name='mobile' value={formValues.mobile} />
            <span>
            <input id='checkbox' type="checkbox" />
            <label htmlFor='checkbox'>Share my registration data with Superapp</label>
            </span>
            <button type="button">SIGN UP</button>
            <div className="terms">
            <p>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
            <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span> </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Registration