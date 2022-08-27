import React from 'react'
import Data from "./data";
import Product from './Product';
import './Css/style.css'

const Products = ({handleClick}) => {
  return (
        <div className="container shadow rounded p-3 my-5 step2 animate__animated animate__zoomIn animate__delay-1s margin">
        <h4 className="fw-bold mb-5">- Most <span className="text-danger">Reviewed</span></h4>       
          <div className="row p-2">
            {
              Data.map((product) => (<Product key={product.id} product={product} handleClick={handleClick}/>))
            }
          </div>
        </div>
  )
}

export default Products;