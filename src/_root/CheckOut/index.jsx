import React from 'react'
import Navbar from '../../Components/shared/navbar/Navbar'
import Cart_Hero from '../../Components/shared/hero/Cart'
import Footer from '../../Components/shared/footer/Footer'
import ShippingDetails from './FormField'


export default function CheckOutPage() {
  return (
    <div>
      <Navbar />
      <Cart_Hero />
      <ShippingDetails />
      <Footer />
    </div>
  )
}
