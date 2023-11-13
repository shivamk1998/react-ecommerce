import React from 'react'
import ProductList from '../features/product-list/components/ProductList'
import Navbar from '../features/navbar/Navbar'

function Home() {
  return (
   <>
   <Navbar>

   <ProductList/>
   </Navbar>
  
   </>
  )
}

export default Home