import React from 'react'
import Navbar from '../../Components/shared/navbar/Navbar'
import Cart_Hero from '../../Components/shared/hero/Cart'
import Cart from './cart'
import Footer from '../../Components/shared/footer/Footer'

export default function CartPage() {
  return (
    <div>
      <Navbar />
      <Cart_Hero />
      <Cart />
      <Footer />
    </div>
  )
}
