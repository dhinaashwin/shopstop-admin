import React, { useState } from 'react'
import upload from '../../assests/images/upload.jpg'
const AddProducts = () => {
    const [image,setImage]=useState(false);
    const [productsdetails,setProductsdetails]=useState({
        name:'',
        image:'',
        category:'women',
        new_price:'',
        old_price:''
    });
    const changeHandler = (e) =>{
        setProductsdetails({...productsdetails, [e.target.name]:e.target.value})
    }
    const imagehandler = (e) =>{
       setImage(e.target.files[0])
    }
    const Add_Product= async () => {
        let responseData;
        let product = productsdetails;
        let formData = new FormData();
        formData.append('product', image);
    
        try {
            const response = await fetch('http://localhost:4000/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData
            });
    
            // Check if the response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            // Try to parse the response as JSON
            responseData = await response.json();
    
            if (responseData.success) {
                await fetch ("http://localhost:4000/addproduct",{
                    method:'POST',
                    headers:{
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify(product),
                }).then((resp) => resp.json()).then((data)=> {
                    data.success?alert("Product Added"):alert("failed")
                })
                product.image = responseData.image_url;
                console.log(product);
                // Add additional logic here, such as updating state or making another API call
            } else {
                // Handle the case where the server response indicates failure
                console.error('Failed to upload the image:', responseData.message);
            }
        } catch (error) {
            // Handle network errors or JSON parsing errors
            console.error('Error during image upload:', error.message);
        }
    }
  return (
    <div className="flex items-center">
        <div>
            <p>Product title</p>
            <input value= {productsdetails.name} type="text" name="name" placeholder="type here" onChange={changeHandler}/>
        </div>
        <div>
            <p>Price</p>
            <input value={productsdetails.new_price}  onChange={changeHandler} type="text" name="new_price" placeholder="type here" />
        </div>
        <div>
            <p>Old Price</p>
            <input value={productsdetails.old_price}  onChange={changeHandler} type="text" name="old_price" placeholder="type here" />
        </div>
        <div>
            <p>Category</p>
            <select value={productsdetails.category} onChange={changeHandler} name="category" id="">
                <option value='men'>Men</option>
                <option value='women'>Women</option>
            </select>
        </div>
        <div>
            <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload} className='w-40 aspect-auto object-cover' alt="" srcset="" />
            </label>
           <input onChange={imagehandler} type="file" name="image" id="file-input" hidden />
        </div>
        <button 
                className="button-black px-3 mt-12" 
                onClick={Add_Product}
            >
                Add
            </button>
    </div>
  )
}

export default AddProducts