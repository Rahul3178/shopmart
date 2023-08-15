import { useEffect } from "react";
import { useFetchProducts } from "../hooks/useFatchProducts";
import { useDispatch } from "react-redux";
import { AddToCart } from "../slices/CartSlicer";
import store from '../stores/store'
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export function ShopperProducts() {
  const params=useParams();
  

    
  const products= useFetchProducts(`https://fakestoreapi.com/products/category/${params.catname}`);
  useEffect(() => {
    
  }, []);

// ! Redux store / cart items handling
const dispatch= useDispatch();


function AddToCartHandle(product){
  dispatch(AddToCart(product))
  console.log("items is added to cart by dispacth item")
}

  return (
    <div className="d-flex flex-wrap gap-3">
      {products.map((product) => (
        <div className="card p-2 shadow-lg " style={{ width: "18rem" }} key={product.id}>
          <Link to={"/products/"+product.id}>
           <img
            className="card-img-top p-2"
            src={product.image}
            alt={product.title}
            height="200"
            width="200"
          />
          </Link>
         
          <div className="card-body" style={{maxHeight:"250"}}>
            <div className="m-3 d-flex flex-wrap flex-column">
              <span className="p-2">{product.title}</span>
              <span className="bi bi-tags-fill"> {product.category}</span>
              <span className="bi bi-currency-rupee text-danger">
                {" "}
                {product.price}
              </span>
              <span className="bi bi-star-fill">
                {" "}
                {product.rating.rate}[{product.rating.count}]
              </span>
              <hr />
              <div className="d-flex justify-content-between">
                <button className="btn btn-warning text-white">Buy</button>
                <button className="btn btn-danger"onClick={()=>AddToCartHandle(product)} >Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
