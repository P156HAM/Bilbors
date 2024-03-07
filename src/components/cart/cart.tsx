import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DeactiveOverlay from "../deactiveOverlay/deactiveOverlay";
import "./cart.css";

function Cart() {
  const cartState = useSelector((state: RootState) => state.cart);
  const count: number = cartState.productList.length;
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [count]);

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
        } transition-transform duration-300 ease-in-out bg-secondary4 z-50 w-full sd:w-5/6 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5`}
      >
        {/* Container for the Close Button */}
        <section className="flex justify-end">
          {/* Close Button */}
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="p-4 text-secondary3 hover:text-secondary1"
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
      </aside>
    </>
  );
}

export default Cart;
