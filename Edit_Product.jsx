import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductService from '../service/product.service';
import productService from '../service/product.service';
const Edit_Product = () => {
  const [product,setProduct] = useState({
    productName:"",
    description:"",
    price:"",
    status:"",

});

const l_navigation=useNavigate();
const {id}=useParams();
console.log(id);

useEffect(()=>{
  productService.getProductById(id).then((res)=>{
    setProduct(res.data);
  }).catch((error)=>{
    console.log(error);
  })
},[])
const [msg,setMsg] =useState("");
// console.log("Product state updated:", product);
const handleChange=(e)=>{
    const value = e.target.value;
    // console.log("sam"+value);
    setProduct({...product, [e.target.name]:value});
};
const ProductUpdateRegister=(e)=>{
    e.preventDefault();
    // console.log("Chetan"+product); 
    console.log("Chetan " + JSON.stringify(product));
    ProductService.editProduct(product).then((res)=>{
      l_navigation("/");
        // console.log("Product added successfully");
        // setMsg("Product Updated successfully");
        // setProduct({
        //     productName:"",
        //     description:"",
        //     price:"",
        //     status:"",
    
        // });
        
    }).catch((error)=>{
        console.log(error);
    });
};

return (
<>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3' >
                <div className='card'>
                <div className='card-header fs-3 text-center' >
                    Edit Product
                </div>
                {
                    msg && <p className='fs-4 text-center text-success'>{msg}</p>
                }
                    <div className='crad-body'>
                        <form onSubmit={(e)=>ProductUpdateRegister(e)}>
                            <div className='mb-3 p-2'>
                                <label>Enter Product Name</label>
                                <input type='text' name='productName' className='form-control' onChange={(e)=>handleChange(e)} value={product.productName}/>
                            </div>
                            <div className='mb-3 p-2'>
                                <label>Enter Product Description</label>
                                <input type='text' name='description' className='form-control' onChange={(e)=>handleChange(e)} value={product.description}/>
                            </div>
                            <div className='mb-3 p-2'>
                                <label>Enter Product Price</label>
                                <input type='text' name='price' className='form-control' onChange={(e)=>handleChange(e)} value={product.price}/>
                            </div>
                            <div className='mb-3 p-2'>
                                <label>Enter Product Status</label>
                                <input type='text' name='status' className='form-control' onChange={(e)=>handleChange(e)} value={product.status}/>
                            </div>
                            <button className='btn btn-primary col-md-12'>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default Edit_Product