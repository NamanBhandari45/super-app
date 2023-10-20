import React, { useState } from "react";
import './category.css'
import Vector from '../assests/Vector.svg'
import Action from '../assests/image 2.png'


function Category(props){
const[selectCategory,setSelectCategory] = useState()




function handleChange(e){
  setSelectCategory({
    ...selectCategory,
    [e.target.name]: [e.target.value]
  })
}

    return(
   <div className="category-container">
     <div className="category-left-div">
        <h1>Super app</h1>
        <p>Choose your <br /> entertainment <br /> category</p>
        <div className="selectedCategory">{selectCategory}<span>X</span></div>
         <p className="error"><span><img style={{ height: '15px'}} src={Vector} alt="danger" /></span> Minimum 3 category required</p>
     </div>
     <div className="category-right-div">
      <button className="category-data" onChange={handleChange}>
      <span className="category-heading">Action</span> 
      <img  className="category-image" src={Action} alt="action" />
      </button>
      <div className="category-data">
      <span className="category-heading">Action</span> 
      <img className="category-image" src={Action} alt="action" />
      </div>
      <div className="category-data">
      <span className="category-heading">Action</span> 
      <img className="category-image" src={Action} alt="action" />
      </div>
      <div className="category-data">
      <span className="category-heading">Action</span> 
      <img className="category-image" src={Action} alt="action" />
      </div>
      <div className="category-data">
      <span className="category-heading">Action</span> 
      <img className="category-image" src={Action} alt="action" />
      </div>
      <div className="category-data">
      <span className="category-heading">Action</span> 
      <img className="category-image" src={Action} alt="action" />
      </div>
      <div className="category-data">
      <span className="category-heading">Action</span> 
      <img className="category-image" src={Action} alt="action" />
      </div>
      <div className="category-data">
      <span className="category-heading">Action</span> 
      <img className="category-image" src={Action} alt="action" />
      </div>
      <div className="category-data">
      <span className="category-heading">Action</span> 
      <img className="category-image" src={Action} alt="action" />
      </div>
      <button type="submit" className="btn">Next Page</button>
     </div>
     
   </div> 
    )
}

export default Category;