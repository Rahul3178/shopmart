import React, { useEffect, useState } from 'react'
import { useFetchProducts } from '../hooks/useFatchProducts'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CustomerFeedbackCenter from './CustomerFeedbackCenter';

const ShopperProductDetails = () => {

    const params= useParams();
    const product= useFetchProducts(`https://fakestoreapi.com/products/${params.id}`);
    const [OurProduct,SetOurProductDetails ]=useState({
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    rating: {
      rate: 0,
      count: 0,
    },
    title: "",
    })
    useEffect(()=>{
        SetOurProductDetails(product)
    },[product])


  return (
    <div className='container'>
      <div className="row shadow m-5  p-3">
        <div className="col d-flex justify-content-center p-4">
            <img className='' src={OurProduct.image} alt="" style={{height:"250px", width:"250px"}} />
        </div>
        <div className="col  p-4">
           {/* Product details */}
           <div className='d-flex justify-content-between mb-3'>
            {/* <span>Name</span> */}
            <span className='fw-bold'>{OurProduct.title}</span>
           </div>
           <div className='d-flex justify-content-center mb-3 flex-wrap'>
            <span className='fw-bold h6'>Description</span>
            <span>{OurProduct.description}</span>
           </div>
           <div className='d-flex justify-content-between mb-3'>
            <span>Category</span>
            <span className='bi bi-tags '> {OurProduct.category}</span>
           </div>
           <div className='d-flex justify-content-between mb-3'>
            <span>Price</span>
            <span className='text-danger bi bi-currency-rupee'>{OurProduct.price}</span>
           </div>
           <div className='d-flex justify-content-between mb-5'>
            <span>Ratings</span>
            <div className="d-flex flex-row gap-2">
            <span className='bi bi-star-fill'></span>
            <span className='bi bi-star-fill'></span>
            <span className='bi bi-star-fill'></span>
            <span className='bi bi-star-half'></span>
            </div>
            
            {/* <span>{OurProduct.rating.rate} [{OurProduct.rating.count}]</span> */}
           </div>
           <div className="d-flex justify-content-between m-3">
           <button className='btn btn-warning' style={{width:"35%"}}>Add to Cart</button>
           <button className='btn btn-danger' style={{width:"35%"}}>Buy</button>

           </div>
           <div className='d-flex justify-content-center m-4'>
                <Link to={"/category/"+OurProduct.category} className='fw-bold h4'>back to {OurProduct.category}</Link>
           </div>
        </div>
      </div>

      <div className=" ">
        <CustomerFeedbackCenter/>
      </div>
    </div>
  )
}

export default ShopperProductDetails
