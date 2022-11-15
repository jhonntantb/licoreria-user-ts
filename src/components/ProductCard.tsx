import React from 'react'

const ProductCard = () => {
  return (
    <div className="card">
        <img src="#" alt="Denim Jeans" style={{width: "100%"}}/>
        <h1>Tailored Jeans</h1>
        <p className="price">$19.99</p>
        <p>Some text about the jeans..</p>
        <p><button>Add to Cart</button></p>
    </div>
  )
}

export default ProductCard