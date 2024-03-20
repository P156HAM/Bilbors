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
      <div className="flex justify-center items-center space-x-2 my-2">
        <button onClick={prevPage}>&lt;</button>
        <span>
          Sida {currentPage + 1}/{totalPages}
        </span>
        <button onClick={nextPage}>&gt;</button>
      </div>
    </div>
  );
};

export default CustomSwiper;
