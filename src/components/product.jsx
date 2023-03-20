import React from 'react'
import API from "./API"
import { Link } from 'react-router-dom'
import './product.css'
const Product = () => {
    const ap = JSON.parse(API)
    console.log(ap);
    return (
    <>
    {/* <div className="pro-container">
        {ap.map((product, i) => (
          <div key={i} className="card">
            <Link to={`/product/${product.id}`}>
              <div className="pro-img">
                <img src={product.images[0].image} alt="" />
              </div>
              <div className="card-desc">
                <h2>{product.name}</h2>
                <h5>{`PRICE: ${product.rate}`}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div> */}
    </>
  )
}

export default Product