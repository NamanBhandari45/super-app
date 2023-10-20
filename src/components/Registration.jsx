import React, { useState } from 'react'
import superImage from "../assests/superImage.png"
import './registration.css'
import { Navigate } from 'react-router-dom'

function Registration() {
 const[formValues,setFormValues] = useState({
    check:"false",
    name: "",
    userName :"",
    email : "",
    mobile : ""
 })

 const[nameError,setNameError] = useState(false)
 const[userNameError,setUserNameError] = useState(false)
 const[emailError,setEmailError] = useState(false)
 const[mobileError,setMobileError] = useState(false)
 const[checkboxError,setCheckboxError] = useState(false)

 function handleChange(e){
   const {name,value} = e.target

   setFormValues({
    ...formValues,
    [name]:value
   })
 }

 function handleClick(e){
  console.log(formValues);

  let valid = true
  
  if(formValues.name.length === 0){
    setNameError(true)
    valid = false
  }

  if(formValues.userName.length === 0){
    setUserNameError(true)
    valid = false
  }

  if(formValues.email.length === 0){
    setEmailError(true)
    valid = false
  }
    
  if(formValues.mobile.length === 0){
    setMobileError(true)
    valid = false
  }

  if(!formValues.check){
    setCheckboxError(true);
    valid = false;
  }
  
  if(valid){
    window.localStorage.setItem("userData",JSON.stringify(formValues));
    Navigate("/genre");
  }
  
  e.preventDefault();
 };


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
            <input type="text" placeholder='Name' name='name'
             onChange={handleChange} 
             value={formValues.name}/>
             {nameError ? <label>Field is required</label> : ""}

            <input type="text" placeholder='UserName' name='userName'
            onChange={handleChange} 
            value={formValues.userName} />
            {userNameError ? <label>Field is required</label> : ""}

            <input type="email" placeholder='Email' name='email'
             onChange={handleChange} 
             value={formValues.email} />
            {emailError ? <label>Field is required</label> : ""}

            <input type="number" placeholder='Mobile' 
            name='mobile' onChange={handleChange}
             value={formValues.mobile} />
            {mobileError ? <label>Field is required</label> : ""}

            <span>
            <input id='checkbox' type="checkbox" name='check' onChange={(e) => {
              setFormValues({
                ...formValues,
                [e.target.name] : e.target.checked
              })
            }}/>
            <label htmlFor='checkbox'>Share my registration data with Superapp</label>
            </span>

            {checkboxError ? <label>Check this box if you want to proceed</label> : ""}
            <button type="submit" onClick={handleClick}>SIGN UP</button>
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