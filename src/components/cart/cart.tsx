import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DeactiveOverlay from "../deactiveOverlay/deactiveOverlay";
import "./cart.css";
import Product, { ProductStyle } from "../product/product";
import { Divider } from "@nextui-org/react";
import { CartItem } from "../../constants/types";

function Cart() {
  const cartState = useSelector((state: RootState) => state.cart);
  const count: number = cartState.productList.length;
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProduct, setCartProduct] = React.useState<CartItem[]>(
    cartState.productList
  );

  useEffect(() => {
    setCartProduct(cartState.productList);
  }, [cartState.productList]);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [count]);

  function calculateCartTotal(cartItems: CartItem[]): number {
    return cartItems.reduce((total, item) => {
      const price = item.price ?? 0;
      const quantity = item.quantity ?? 0;
      return total + price * quantity;
    }, 0);
  }
  const fraktPrice = 39;
  const totalCartPrice = calculateCartTotal(cartProduct) + fraktPrice;

  return (
    <>
      <DeactiveOverlay
        isActive={isCartOpen}
        setIsActive={setIsCartOpen}
        autoDismiss={false}
      />
      <div
        className="relative cursor-pointer z-40"
        onClick={() => setIsCartOpen(true)}
      >
        <div className="cart-logo"></div>
        {count > 0 ? (
          <span
            className={`absolute flex justify-center items-center top-0 right-0 transform -translate-y-1/2 translate-x-1/2 rounded-full bg-primary3 text-white w-5 h-5 text-xs ${
              isAnimating ? "scale-125" : "scale-100"
            } transition-transform duration-300 ease-out`}
          >
            {count}
          </span>
        ) : (
          ""
        )}
      </div>
      <aside
        style={{ right: isCartOpen ? "0" : "-100%" }}
        className={`fixed top-0 right-0 h-full transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out bg-secondary3 px-8 z-50 w-full  sm:w-3/4 md:w-3/6 lg:w-5/12 xl:w-4/12 2xl:w-[32rem] overflow-y-auto`}
      >
        {/* Container for the Close Button */}
        <section className="flex justify-between py-8">
          <h1 className="font-headline text-primary3 text-xl font-bold w-full">
            Varukorg
          </h1>
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className=" text-primary3 hover:text-primary3"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </section>
        <article className="w-full">
          {cartProduct.map((product) => (
            <div key={product.id}>
              <Product item={product} style={ProductStyle.CARTPRODUCT} />
              <Divider className="my-4" />
            </div>
          ))}
        </article>
        <div className="p-4 bg-white">
          <section className="w-full flex flex-row justify-between border-b-2 border-secondary3 mb-2 leading-loose">
            <span>Frakt</span>
            <span> {fraktPrice} </span>
          </section>
          <section className="w-full flex flex-row justify-between items-center font-semibold mt-2 leading-relaxed">
            <span>Att betala</span>
            <span> {totalCartPrice} kr</span>
          </section>
        </div>
        <Divider className="mt-8 mb-2 bg-white" />
        <button className="bg-blue-500 text-white p-2 w-full">
          Gå till kassan
        </button>
      </aside>
    </>
  );
}

export default Cart;
