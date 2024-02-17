import React, { useState, useEffect } from 'react';
import ProductService from '../service/product.service';
import { Link } from 'react-router-dom'

function Home() {

  const [productList,setProductList] =useState([]);
  const [msg,setMsg] = useState("");
  useEffect(()=>{
    init();
  },[]);

  const init=()=>{
    ProductService.getAllProduct().then((res)=>{
      console.log("sumit"+JSON.stringify(res.data));
        setProductList(res.data);
    }).catch((error)=>{
      console.log(error);
    });
  };

  const deleteProduct=(id)=>{
    ProductService.getDeleteProductById(id).then((res)=>{
      // setProductList(res.data);
      console.log("NON DELETED");
      setMsg("Product Deleted Successfully");

      init();
      // console.log("NON DELETED"+res.data);
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <div className='container mt-3' >
     <div className='row'>
        <div className='col-md-12'>
            <div className='card'>
            <div className='card-header fs-3 text-center'>
              All Product Details...
              {msg && <p className='fs-4 text-center text-success'>{msg}</p>}
            </div>
              <div className='card-body'>
              <table class="table">
  <thead>
      {/* {productList.map((p,num)=>( */}
        <tr>
      <th scope="col">sr</th>
      <th scope="col">Product Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
      {/* ))} */}

  </thead>
  <tbody>
  { productList.map((p,num)=>(
    <tr>
      <td>{++num}</td>
      <td>{p.productName}</td>
      <td>{p.description}</td>
      <td>{p.price}</td>
      <td>{p.status}</td>
      <td>
      <Link to={'editProduct/'+p.id} className='btn btn-sm btn-primary'>Edit</Link> 
      <button  onClick={()=>deleteProduct(p.id)}className='btn btn-sm btn-danger ms-1'>Delete</button>
      </td>
    </tr> 
  ))}

  </tbody>
</table>
              </div>
            </div>
        </div>
     </div>
 
    </div>
  );
}

export default Home;
