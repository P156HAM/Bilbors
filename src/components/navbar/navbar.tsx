import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-secondary4 text-primary1">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo and Hamburger Menu */}
          <section className="flex items-center">
            <a
              href="#"
              className="brand-logo flex items-center sm:order-second  mr-4 sm:mr-2 sd:mr-2"
            ></a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="justify-between space-x-1 flex lg:hidden xl:hidden 2xl:hidden text-primary2 hover:text-secondary2 sm:order-first sd:order-first sm:mr-2 sd:mr-2"
            >
              <svg
                className="w-6 h-6 text-current"
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <span className="hidden md:flex text-primary2 hover:text-secondary2">
                Menu
              </span>
            </button>
            <div className="flex  sd:hidden sm:hidden md:hidden space-x-4">
              <a
                href="#"
                className="font-subHeadline align-baseline  text-primary2 hover:text-secondary2"
              >
                Auctions
              </a>
              <a
                href="#"
                className="font-subHeadline justify-end text-primary2 hover:text-secondary2"
              >
                Categories
              </a>
              {/* Add more items as needed */}
            </div>
          </section>

          {/* Search Bar - Center */}
          <section className="block sd:hidden sm:hidden md:hidden flex-1 mx-10">
            <section className="relative">
              <input
                type="text"
                className="w-full py-2 pl-10 pr-4 rounded border-primary2 border-1 outline-1 bg-secondary4 text-secondary3 focus:outline-none focus:shadow-outline"
                placeholder="Sök..."
              />
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>search_line</title>
                  <g id="search_line" fill="currentColor" fillRule="evenodd">
                    <path
                      fill="currentColor"
                      d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2ZM4 10.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
                    />
                  </g>
                </svg>
              </span>
            </section>
          </section>

          {/* Favorite and Cart Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="favorite-logo"></a>
            <a href="#" className="cart-logo"></a>
          </div>
        </div>

        {/* Mobile Menu */}
        <aside
          className={`fixed inset-y-0 left-0 transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out bg-secondary4 w-full sm:w-3/4 md:w-1/2 lg:hidden`}
        >
          {/* Container for the Close Button */}
          <section className="flex justify-end">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
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
          <a
            href="#"
            className="block py-4 px-4 text-lg text-secondary3 hover:bg-secondary2"
          >
            Kategorier
          </a>
          <a
            href="#"
            className="block py-4 px-4 text-lg text-secondary3 hover:bg-secondary2"
          >
            Auktioner
          </a>
          <a
            href="#"
            className="block py-4 px-4 text-lg text-secondary3 hover:bg-secondary2"
          >
            Sälja hos oss
          </a>
          <a
            href="#"
            className="block py-4 px-4 text-lg text-secondary3 hover:bg-secondary2"
          >
            Om oss
          </a>
          <a
            href="#"
            className="block py-4 px-4 text-lg text-secondary3 hover:bg-secondary2"
          >
            Kundservice
          </a>
        </aside>
      </div>
    </nav>
  );
}

export default Navbar;
