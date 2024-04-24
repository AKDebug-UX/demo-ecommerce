import React from 'react';
import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


export default function ShippingDetails() {
  const notify = () => toast("Wow so easy!");
  return (
    /*<section className='flex bg-blue h-[30em] md:container mx-auto justify-around gap-x-[8rem] mt-[4em]'>
    <main className='items-start'>
        <h1 className='text-3xl font-bold'>Billing details</h1>
        <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
         
    </main>

    <article className="flex flex-col h-[20em] w-[32em] items-start rounded-md pt-[2em]">
        <section className="flex justify-evenly items-start w-[28.563em] text-[25px] font-bold mb-5">
           <div className=''>
              <h4 className='text-{1.2rem} font-medium'>Product</h4>
                <p className='text-sm text-gray-600 mt-4'>MIRAGE MR-AT172 285/65</p>
                <p className=' mt-4 text-sm'>Subtotal</p>
                <p className=' mt-4 text-sm'>Total</p>
              
           </div>

           <div className=''>
              <h4 className='text-{1.2rem} font-medium'>Subtotal</h4>
                <div className=''>
                 <p className='text-gray-600 text-sm  mt-4'>Rs. 50,000.00</p>
                 <p className='text-gray-600 text-sm  mt-4'>Rs. 50,000.00</p>
                <h3 className="text-[#B88E2F]  mt-4 text-lg">Rs. 50,000.00</h3>
                </div>
           </div>
        
        </section>
          

          <section className="items-start">
               <div className=''>
               <input type="radio" />
               
               </div>
          </section>
   {/*} <button
      onClick={() => navigate(`/checkout`)}
      className="border border-black mt-9 text-black hover:text-white bg-none hover:bg-black font-bold px-8 py-3 rounded-lg"
    >
      Check Out
  </button> 

  </article>
  </section>*/
  <Grid />
  )
}

function Grid () {
  return(

    <main class="grid md:grid-cols-2 max-w-[30cm] gap-x-[3cm] justify-center mx-auto my-[2cm] grid-cols-2 bg-white">
        <section class="flex flex-col bg-white rounded-t-lg">
       
          <FormField />
        </section>


        <section class="flex flex-col bg-white p-5 mt-3">
          <main className='flex flex-row justify-between'>
              <div>
                  <h3 className='text-xl font-semibold mb-4'>Product</h3>
                  <p className='text-xs font-medium mb-4 text-[#94a3b8]'>MIRAGE MR-AT172 285/65</p>
                  <p className='text-xs font-semibold mb-4'>Subtotal</p>
                  <p className='text-xs font-semibold mb-4'>Total</p>
              </div>

              <div>
                <h3 className='text-xl font-semibold mb-4'>Subtotal</h3>
                  <p className='text-xs font-medium mb-4'>Rs. 50,000.00</p>
                  <p className='text-xs font-medium mb-4'>Rs. 50,000.00</p>
                  <p className='text-xl font-semibold mb-4 text-[#fcd34d]'>Rs. 50,000.00</p>
              </div>
          </main>

          <hr class="h-px my-3 bg-gray-200 border-1 dark:bg-gray-400"></hr>
               <main className='flex flex-col gap-3'>
                  <section>
                    <div className='flex flex-row gap-3'>
                      <input type='radio' className='bg-gray-50'/>
                      <p className='text-sm'>Direct Bank Transfer</p>
                    </div>
                    <p className='text-sm font-normal w-[12cm] text-[#9ca3af]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    </section>

                   <section>
                    <div className='flex flex-row gap-3'>
                      <input type='radio' className='bg-dark'/>
                      <p className='text-[#9ca3af] text-sm'>Direct Bank Transfer</p>
                    </div>
                    <div className='flex flex-row gap-3'>
                      <input type='radio' className='bg-dark'/>
                      <p className='text-[#9ca3af] text-sm'>Cash On Delivary</p>
                    </div>
                    </section>

                    <p className='text-sm font-normal w-[12cm] text-[#9ca3af]'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-bold text-black'>privacy policy.</span></p>
                    
                    <div className='mt-4'>
                    <button type="button" class="py-4 max-w-[5cm] mx-[4cm] justify-center px-12 me-2 mb-2 text-sm font-normal focus:outline-none bg-white rounded-xl border hover:bg[#fcd34d] hover:text-white dark:border-[#fcd34d] dark:hover:text-white dark:hover:bg-[#fcd34d]">Place Order</button>
                    </div>
               </main>
        </section>
        
    </main>
    )
}

    function FormField (){
      return(
        <form className='px-5'>
        <h1 className='text-3xl font-bold mb-5'>Billing details</h1> 
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label for="first_name" className="block mb-2 text-sm font-medium ">First name</label>
                <input type="text" id="first_name" className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300" required />
            </div>
            <div>
                <label for="last_name" className="block mb-2 text-sm font-medium">Last name</label>
                <input type="text" id="last_name" className="bg-gray-30 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3.5" required />
            </div>
          </div>

          <div>
          <label for="company" className="block mb-2 text-sm font-medium">Company Name (Option)</label>
          <input type="text" id="company" className=" mb-5 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300" required />
      </div>  
      <div>
          <label for="phone" className="block mb-2 text-sm font-medium">Country / Region</label>
          <select type="phone" id="email" className=" mb-4 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300">
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
      </div>

      <div>
          <label for="website" className="block mb-2 text-sm font-medium">Street address</label>
          <input type="url" id="website" className=" mb-5 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300" required />
      </div>
      <div>
          <label for="visitors" className="block mb-2 text-sm font-medium">Town / City</label>
          <input type="text" id="visitors" className=" mb-5 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300" required />
      </div>
        <div class="mb-6">
            <label for="email" className="block mb-2 text-sm font-medium">Province</label>
            <select type="email" id="email" className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300">
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div> 
       
        <div class="mb-6">
            <label for="password" className="block mb-2 text-sm font-medium">Zip code</label>
            <input type="password" id="password" className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300" required />
        </div> 
        <div class="mb-6">
            <label for="confirm_password" className="block mb-2 text-sm font-medium">Phone</label>
            <input type="password" id="confirm_password" className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300" required />
        </div> 

        <div class="mb-6">
            <label for="confirm_password" className="block mb-2 text-sm font-medium">Email address</label>
            <input type="password" id="confirm_password" className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300" required />
        </div> 

        <div class="mb-6">
            <input type="password" id="confirm_password" className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300" placeholder='Additional Information' required />
        </div>
        </form>
      );
    }
/*
 function DetailsInput () {
        const [formData, setFormData] = useState({
            FirstName: '',
            LastName: '',
            Country: '',
            Title: ''
        });

        // Event handler function for input changes
        const handleChange = (e) => {
          const {name, value} = e.target;
          setFormData({
              ...formData,
              [name]: value,
          });
        };

        const handleSubmit = (e) =>{
            e.preventDefault();

            {/*console.log(formData)
        };

        return (
          <div className="App">
            <h3>Add Student</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  placeholder="First Name"
                  value={formData.FirstName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type='text'
                  name='LastName'
                  id="LastName"
                  placeholder='Last Name'
                  value={formData.LastName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type='text'
                  name='Country'
                  id="Country"
                  placeholder='Country'
                  value={formData.Country}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type='text'
                  name='Title'
                  id="Title"
                  placeholder='Title'
                  value={formData.Title}
                  onChange={handleChange}
                />
              </div>
              <button
              onClick={() => navigate(`/`)}
              className="border border-black mt-9 text-black hover:text-white bg-none hover:bg-black font-bold px-8 py-3 rounded-lg"
            >
              Check Out
            </button>
            </form>

            <h1>{formData.FirstName}</h1>
            <h1>{formData.LastName}</h1>
            <h1>{formData.Country}</h1>
            <h1>{formData.Title}</h1>
          </div>
        );
 }*/
