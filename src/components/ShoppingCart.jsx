import React, { useState } from 'react'

export default function ShoppingCart({ imgSrc, imgSrc1, productName, productName1, productPrice, productPrice1, productDiscount, productDiscount1, shipping }) {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function rest(setter, count) {
    if (count > 0) {
      setter(prevCount => prevCount - 1);
    }
  }
  
  function add(setter) {
    setter(prevCount => prevCount + 1);
  }

  return (
    <>
      <div className='item'>
        <div className="img">
          <img src={imgSrc} alt={productName + " photo"} />
        </div>
        <div className='item-info'>
          <h4>{productName}</h4>
          <p><span className='price'>${productPrice}</span> $<u>{productDiscount}</u></p>
          <div className='count'>
            <button onClick={() => {rest(setCount1, count1)}}> - </button>
            <span> {count1} </span>
            <button onClick={() => {add(setCount1)}}> + </button>
          </div>
        </div>
      </div>
      <div className='item'>
        <div className="img">
          <img src={imgSrc1} alt={productName1 + " photo"} />
        </div>
        <div className='item-info'>
          <h4>{productName1}</h4>
          <p><span className='price'>${productPrice1}</span> $<u>{productDiscount1}</u></p>
          <div className='count'>
            <button onClick={() => {rest(setCount2, count2)}}> - </button>
            <span> {count2} </span>
            <button onClick={() => {add(setCount2)}}> + </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-inline">
        <p>Shipping: </p>
        <p>${shipping}</p>
      </div>
      <hr />
      <div className="text-inline">
        <p>Total: </p>
        <p>${(count1 * productPrice + count2 * productPrice1).toFixed(2)}</p>
      </div>
    </>
  )
}
