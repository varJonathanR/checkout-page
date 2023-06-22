import React, { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import { Labels, Checkbox, Button } from './components/FormLabel'
import CountryDropdown from './components/CountryDropdown'
import ShoppingCart from './components/ShoppingCart'
import Footer from './components/Footer'
import img0 from './assets/photo1.png'
import img1 from './assets/photo2.png'
import './App.scss'

function App() {
  /* const headers = new Headers();
  headers.append("X-CSCAPI-KEY", "API_KEY");

  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)); */

  const product = [
    {
      shipping: 19
    },
    {
      name: "Vinatge Backbag",
      discount: 94.99,
      price: 54.99,
      imgSrc: img0
    },
    {
      name: "Levi Shoes",
      discount: 124.99,
      price: 74.99,
      imgSrc: img1
    }
  ];

  return (
    <>
      <header>
        <Header />
      </header>
      <main className='main'>
        <div className="main-form">
          <form action="#">
            <div className="main-form-contact">
              <h3>Contact information</h3>
              <Labels pText={"Email"} inputType={"email"} inputHolder={"Enter your email..."} inputLength={"5"} inIcon={"bi bi-envelope-fill"} />
              <Labels pText={"Phone"} inputType={"tel"} inputHolder={"Enter your phone..."} inputLength={"7"} inIcon={"bi bi-telephone-fill"} />
            </div>
            <div className="main-form-address">
              <h3>Shipping address</h3>
              <Labels pText={"Full Name"} inputType={"text"} inputHolder={"Your full name..."} inputLength={"5"} inIcon={"bi bi-person-circle"} />
              <Labels pText={"Address"} inputType={"text"} inputHolder={"Your address..."} inputLength={"5"} inIcon={"bi bi-house-door-fill"} />
              <Labels pText={"City"} inputType={"text"} inputHolder={"Your city..."} inputLength={"5"} inIcon={"bi bi-buildings-fill"} />
              <div className="main-form-address-inline">
                <CountryDropdown pText={"Country"} inputHolder={"-- Select your country --"} inIcon={"bi bi-globe-americas"} />
                <Labels pText={"Postal code"} inputType={"text"} inputHolder={"Your postal code..."} inputLength={"5"} inIcon={"bi bi-mailbox2"} />
              </div>
            </div>
            <Checkbox />
            <Button />
          </form>
        </div>
        <div className="main-shop">
          <div className="main-shop-card">
            <ShoppingCart imgSrc={img0} productName={product[1].name} productPrice={product[1].price} productDiscount={product[1].discount} imgSrc1={img1} productName1={product[2].name} productPrice1={product[2].price} productDiscount1={product[2].discount} shipping={product[0].shipping} />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
