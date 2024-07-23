import React, { useContext, useState } from "react";
import { addToCart, cardData } from "../contexts/Cardcontext";

function Cards() {

const cards =useContext(cardData);
const [cart,setcart] =useContext(addToCart);

const cardHandler=(card)=>{
  // alert("clicked")
  setcart([...cart,card]);
// console.log(cart);
  
}
  
  
  return (

    <div className="w-full min-h-screen bg-zinc-300 flex justify-start flex-wrap p-10 gap-10">
    {cards.map((card,index)=>(

      <div key={card.id} className="card w-1/5 h-72 bg-zinc-200 rounded p-1 flex flex-col justify-between shrink-0">
        <section className=" img w-full h-52 bg-pink-300 rounded-lg object-cover overflow-hidden">
            <img src={card.image} alt="" className="h-full w-full" />
        </section>
        <section className="flex justify-between">
          <button className="font-semibold px-4 py-1 bg-blue-500 text-white rounded-lg">
            About
          </button>
          <button 
          onClick={()=>cardHandler(card)}
          className="font-semibold px-4 py-1 bg-blue-500 text-white rounded-lg">
            Add to cart
          </button>
        </section>
      </div>


))}
</div>
   
  );
}

export default Cards;
