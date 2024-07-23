import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";
import ShowItems from '../ShowItems/ShowItems';
import { addToCart } from '../contexts/Cardcontext';


function Nav() {

  const [cart,setcart] = useContext(addToCart)
  const  [show, setshow]= useState(false)
  const showCartHandler=()=>{
    // alert(show)
    setshow(!show)

  }

  return (
    <div className=' relative max-w-screen-xl m-auto h-12 bg-zinc-300 flex justify-between items-center px-5 border-b-2 '>
       <section className='flex gap-5 text-xl font-semibold '>
       <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
       </section>
       <section > 
        <h1 
        onClick={showCartHandler}
        className='cursor-pointer pointer text-3xl text-black flex gap-2 items-center '><FaCartArrowDown/>{cart.length}</h1>
        <ShowItems show={show} />
       </section>
    </div>
  )
}

export default Nav;