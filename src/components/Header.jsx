import React from 'react'
import Product from './Product'

function Header({setDatas, datas, datas1}) {
    return (
        <div>
            <div className='header'>
                <div className="container">
                    <div className="headrs">
                        <div className="header-1">
                            <h1>NEW SEASON ARRIVALS</h1>
                            <p>CHECK OUT ALL THE TRENDS</p>
                        </div>
                        <div className="header-2">
                            <img src="./hero-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Product datas1={datas1} setDatas={setDatas} datas={datas}/>
        </div>
    )
}

export default Header