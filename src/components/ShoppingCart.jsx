import React, { useState } from 'react'

function ShoppingCart({ imgSrc, productName, productPrice, productDiscount }) {

  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function rest() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className='item'>
        <div className="img">
          <img src={imgSrc} alt={productName + " photo"} />
        </div>
        <div className='item-info'>
          <h4>{productName}</h4>
          <p><span className='price'>${productPrice}</span> $<u>{productDiscount}</u></p>
          <div className='count'>
            <button onClick={rest}> - </button>
            <span> {count} </span>
            <button onClick={add}> + </button>
          </div>
        </div>
    </div>
  )
}

function Shipping ({ shipping }) {
  return (
    <div className="text-inline">
      <p>Shipping: </p>
      <p>${shipping}</p>
    </div>
  )
}

function Total () {

  return (
    <div className="text-inline">
      <p>Total: </p>
      <p>$129.98</p>
    </div>
  )
}

export { ShoppingCart, Shipping, Total }