import React from 'react'
import "./Onee.css";
import a from "../test/data";

export default function Onee() {
  return (
    <div>
        <div className='main-bg'></div>

        <div className='container'>
            <row>
            <div className='col-md-4'>안녕</div>
            <img src='https://codingapple1.github.io/shop/shoes1.jpg'width="20%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>{a}
            <div className='col-md-4'>안녕</div>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg'width="20%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
            <div className='col-md-4'>안녕</div>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg'width="20%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
            </row>
        </div>
    </div>
  )
}
