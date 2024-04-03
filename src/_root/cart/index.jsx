import React from 'react'
import Navbar from '../../Components/shared/navbar/Navbar'
import Footer from '../../Components/shared/footer/Footer'
import Cart_Hero from '../../Components/shared/hero/Cart'

export default function home() {
  return (
    <div>
      <Navbar />
      <Cart_Hero />
      <Footer />
    </div>
  )
}
