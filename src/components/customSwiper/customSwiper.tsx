import { useState } from "react";
import Product, { ProductStyle } from "../product/product";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/actions/actions";
import { Maybe, ProductType } from "../../constants/schema";
import { CartItem } from "../../constants/types";

interface CustomSwiperProps {
  products?: Maybe<ProductType[]>;
  itemsPerPage: number;
}

const CustomSwiper = ({ products, itemsPerPage }: CustomSwiperProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const totalPages = products ? Math.ceil(products.length / itemsPerPage) : 0;

  // Function to handle page change
  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const handleAddProduct = (product: CartItem) => {
    dispatch(addItem(product));
  };

  // Slice products for the current page
  const currentProducts = products
    ? products.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      )
    : [];

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {currentProducts &&
          currentProducts.map((product, index) => (
            <div key={index} className="w-1/3 sd:w-1/2 p-2">
              <Product
                item={product}
                key={product.id}
                style={ProductStyle.GALLERYPRODUCT}
                handleAddProduct={handleAddProduct}
              />
            </div>
          ))}
      </div>
      <div className="flex justify-center items-center space-x-2 my-2 font-headline text-lg">
        <button onClick={prevPage}>
          <span>
            <svg
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M15.84 21.36a.748.748 0 0 1-.53-.22l-7.55-7.55a2.252 2.252 0 0 1 0-3.18l7.55-7.551a.75.75 0 1 1 1.06 1.06l-7.55 7.55a.751.751 0 0 0 0 1.061l7.55 7.55a.75.75 0 0 1-.53 1.28z"></path>
            </svg>
          </span>
        </button>
        <span>
          Sida {currentPage + 1} av {totalPages}
        </span>
        <button onClick={nextPage}>
          <span>
            <svg
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M7.63 21.14a.75.75 0 0 1 0-1.06l7.55-7.55a.751.751 0 0 0 0-1.06L7.63 3.92a.75.75 0 1 1 1.06-1.061l7.55 7.55a2.252 2.252 0 0 1 0 3.182l-7.55 7.55a.748.748 0 0 1-1.06 0z"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CustomSwiper;
