import React, { useContext } from "react";
import { addToCart } from "../contexts/Cardcontext";
import { MdDelete } from "react-icons/md";

function ShowItems({ show }) {
  // console.log(show);
  const [cart, setcart] = useContext(addToCart);
  const deletHandler = (id) => {
    setcart(cart.filter((item) => item.id !== id));
  };
  //   console.log(cart.length);
  return (
    <div
      className={
        show
          ? "text-white font-semibold p-2 w-1/5 backdrop-blur-sm backdrop-contrast-50 absolute top-10 right-0 rounded flex flex-col gap-2"
          : "hidden"
      }
    >
      {cart.map((ele) => (
        <div className="flex items-center gap-4 text-xl">
          <div className="w-12 h-12  rounded-lg overflow-hidden">
            <img src={ele.image} alt="" />
          </div>
          <h1>{ele.name}</h1>
          <button onClick={()=>deletHandler(ele.id)}>
            <MdDelete />
          </button>
        </div>

        // <h1>{ele.name}</h1>
      ))}
    </div>
  );
}

export default ShowItems;
