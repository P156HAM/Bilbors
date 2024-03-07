import { useDispatch } from "react-redux";
import { productList } from "../../../testData";
import { addItem } from "../../redux/actions/actions";
import { CartItem } from "../../redux/reducers/cartReducers";
import Product from "../product/product";
import { ProductStyle } from "../product/product";

function Products() {
  const dispatch = useDispatch();

  const handleAddProduct = (product: CartItem) => {
    dispatch(addItem(product));
  };

  return (
    <div className=" px-5 gap-2 grid grid-cols-4 sd:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3 p-1">
      {productList.map((product) => (
        <Product
          item={product}
          key={product.id}
          style={ProductStyle.GALLERYPRODUCT}
          handleAddProduct={handleAddProduct}
        />
      ))}
    </div>
  );
}

export default Products;
