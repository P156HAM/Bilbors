import { Outlet } from "react-router-dom";
import SearchBar from "../components/searchBar/searchBar";

function ProductsLayout() {
  return (
    <>
      <SearchBar />
      <Outlet />
    </>
  );
}

export default ProductsLayout;
