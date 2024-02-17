import React, { useState } from 'react'
import ProductService from '../service/product.service';
const Add_Product = () => {

    const [product,setProduct] = useState({
        productName:"",
        description:"",
        price:"",
        status:"",

    });
    const [msg,setMsg] =useState("");
    // console.log("Product state updated:", product);
    const handleChange=(e)=>{
        const value = e.target.value;
        // console.log("sam"+value);
        setProduct({...product, [e.target.name]:value});
    };
    const ProductRegister=(e)=>{
        e.preventDefault();
        // console.log("Chetan"+product); 
        console.log("Chetan " + JSON.stringify(product));
        ProductService.saveProduct(product).then((res)=>{
            // console.log("Product added successfully");
            setMsg("Product added successfully");
            setProduct({
                productName:"",
                description:"",
                price:"",
                status:"",
        
            });
            
        }).catch((error)=>{
            console.log(error);
        });
    };

  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-7 offset-md-3' >
                    <div className='card'>
                    <div className='card-header fs-3 text-center' >
                        Add Product
                    </div>
                    {
                        msg && <p className='fs-4 text-center text-success'>{msg}</p>
                    }
                        <div className='crad-body'>
                            <form onSubmit={(e)=>ProductRegister(e)}>
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
                                <button className='btn btn-primary col-md-12'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Add_Product