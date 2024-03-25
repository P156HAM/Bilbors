import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import SearchBar from "../components/searchBar/searchBar";

function MainLayout() {
  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname !== "/" && (
        <div className=" md:hidden lg:hidden xl:hidden 2xl:hidden">
          {" "}
          <SearchBar />{" "}
        </div>
      )}
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
