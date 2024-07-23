import React, { createContext, useState } from "react";
export const cardData = createContext(null);
export const addToCart = createContext(null);

function Cardcontext(props) {
    const cards = [
        {
          id: 1,
          name: 'Card One',
          title: 'The First Card',
          image: 'https://images.unsplash.com/photo-1717137389747-d1d4ced6abc8?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8'
        },
        {
          id: 2,
          name: 'Card Two',
          title: 'The Second Card',
          image: 'https://images.unsplash.com/photo-1413708617479-50918bc877eb?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8fDA%3D'
        },
        {
          id: 3,
          name: 'Card Three',
          title: 'The Third Card',
          image: 'https://images.unsplash.com/photo-1640075070129-56f9f759b8cb?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGl0ZW1zfGVufDB8fDB8fHww'
        },
        {
          id: 4,
          name: 'Card Four',
          title: 'The Fourth Card',
          image: 'https://images.unsplash.com/photo-1702656076286-0cd68e234c4b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGl0ZW1zfGVufDB8fDB8fHww'
        },
        {
          id: 5,
          name: 'Card Five',
          title: 'The Fifth Card',
          image: 'https://images.unsplash.com/photo-1557234424-db3778bd0346?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXRlbXN8ZW58MHx8MHx8fDA%3D'
        }
      ];

      const [cart,setcart] = useState([])

    //  const addTocartArray=[];
    //  const cartHandler=(item)=>{
    //     addTocartArray.push(item);
    //     console.log(addTocartArray);
        
    //  }
         
  return (
    <cardData.Provider value={cards}>
      <addToCart.Provider value={[cart,setcart]}>{props.children}</addToCart.Provider>
    </cardData.Provider>
  );
}

export default Cardcontext;
