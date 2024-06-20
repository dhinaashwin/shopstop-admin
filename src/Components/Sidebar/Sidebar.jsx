import React from 'react'
import {Link} from "react-router-dom"
import addproduct from '../../assests/images/addproduct.jpg'
import listproduct from '../../assests/images/listproduct.jpg'
const Sidebar = () => {
  return (
    <div className="flex justify-center flex-col">
     <div > 
      <Link to ={"/addproducts"} className="flex items-center">
      <img src={addproduct} className="w-20"/>
      <h3>
    Add Product
      </h3>
      </Link>
    </div>
    <div>
      <Link to ={"/listproducts"} className="flex items-center   ">
      <img src={listproduct} className="w-20" />
      <h3>
        List Product
      </h3>
      </Link>
    </div>
    </div>
   
  )
}

export default Sidebar