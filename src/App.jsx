import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductId from './pages/ProductId'
import Header from './components/Header'
import Product from './components/Product'
import Cart from './pages/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [datas, setDatas] = useState([])
  const [navData, setNavData] = useState([])
  const [datas1, setDatas1] = useState([])
  async function getData(link) {
    const req = await fetch(link)
    const data = await req.json()
    setDatas(data)
    setDatas1(data)
  }
  useEffect(() => {
    getData(`https://fakestoreapi.com/products`)
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Navbar navData={navData} />
        <Routes>

          <Route path='/productId/:id' element={<ProductId navData={navData} setNavData={setNavData} />} />
          <Route path='/' element={<Header datas1={datas1} setDatas={setDatas} datas={datas} />} />
          <Route path='/product' element={<Product datas1={datas1} setDatas={setDatas} datas={datas} />} />

          <Route path='/cart' element={<Cart setNavData={setNavData} navData={navData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App