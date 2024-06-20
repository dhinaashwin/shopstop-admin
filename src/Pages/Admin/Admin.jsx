import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Routes,Route} from "react-router-dom"
import AddProducts from '../../Components/AddProducts/AddProducts'
import ListProducts from '../../Components/ListProducts/ListProducts'

const Admin = () => {
  return (
    <div>
<Navbar/>
<Sidebar/>
<Routes>
<Route path="/addproducts" element={<AddProducts/>} ></Route>
<Route path="/listproducts" element={<ListProducts/>} ></Route>
</Routes>
    </div>
  )
}
export default Admin