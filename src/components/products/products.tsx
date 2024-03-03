import { productList } from "../../../testData";
import Product from "../product/product";

function Products() {
  return (
    <div className="gap-2 grid grid-cols-4 sd:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 col-span-2 lg:col-span-3 xl:col-span-3 2xl:col-span-3 p-1 bg-secondary4">
      {productList.map((product) => (
        <Product item={product} />
      ))}
    </div>
  );
}

export default Products;
