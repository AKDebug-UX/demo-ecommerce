import React from "react";
import Cart_Hero from "../../../assets/heros_bg/Cart.png";
import { Link } from "react-router-dom";
const CartHero = () => {
  return (
    <div className="h-auto items-center justify-center">
      <img
        className=" top-0 left-0 w-full h-[250px] object-cover"
        alt="/"
        src={Cart_Hero}
      />
      <section className="flex absolute mx-auto ml-12 top-[13em] items-center justify-center">
        <div className="flex mx-auto font-bold text-black text-center z-99 items-center justify-center">
          <Link to={"/"}>Home</Link> <ion-icon name="caret-forward-outline"></ion-icon> <Link to={"/"}>Cart</Link>
        </div>
      </section>
    </div>
  );
};

export default CartHero;
