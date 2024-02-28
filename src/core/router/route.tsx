import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "../../components/protectedRoute/protectedRoute";
import MainLayout from "../../layouts/mainLayout";
import Home from "../../pages/home/home";

// Lazy-loaded pages
// const Products = lazy(() => import("./pages/Products"));
// const ProductDetail = lazy(() => import("./pages/ProductDetail"));
// const Signin = lazy(() => import("./pages/Auth/Signin"));
// const Signup = lazy(() => import("./pages/Auth/Signup"));
// const Profile = lazy(() => import("./pages/Profile"));
// const Cart = lazy(() => import("./pages/Cart"));
// const Admin = lazy(() => import("./pages/Admin"));
// const Error404 = lazy(() => import("./pages/Error404"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/product/:product_id" element={<ProductDetail />} /> */}
            {/* <Route path="/signin" element={<Signin />} /> */}
            {/* <Route path="/signup" element={<Signup />} /> */}
            {/* <Route path="/basket" element={<Basket />} /> */}

            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              {/* <Route path="/profile" element={<Profile />} /> */}
              {/* Admin-only route */}
              <Route element={<ProtectedRoute admin={true} />}>
                {/* <Route path="/admin" element={<Admin />} /> */}
              </Route>
            </Route>
          </Route>

          {/* Catch-all for 404, outside MainLayout to avoid rendering layout components */}
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
