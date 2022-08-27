import React from 'react'
import './Css/product.css'

const Product = ({product, handleClick}) => {
    const { title, price, img} = product;
  return (
        <div className="col-sm-12 col-md-6 col-lg-3 hvr-float pb-5">
            <img src={img} alt='a' height='300px' width='300px' />
          <div className="showbtn">
            <div className="mt-2 px-2">
                {/* <div className="d-none msg border border-success text-center text-success smalltext">Added to cart</div> */}
                <div>{title}</div>
                <del className="text-muted">$20,000</del>
                <div>{price} </div>
            </div>
            <button className="m addcartbtn hvr-float-shadow add-cart btn btn-primary shadow mt-2 w-100" onClick={() => handleClick( product)}>
                ADD TO CART
            </button>
          </div>
        </div>
  )
}

export default Product;