import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "../../components/protectedRoute/protectedRoute";
import MainLayout from "../../layouts/mainLayout";
import Home from "../../pages/home/home";
import { Subcategory } from "../../constants/types";
import { categories } from "../../../testData.ts";
import CategoryPage from "../../pages/categoryPage/categoryPage.tsx";
import NotFoundPage from "../../pages/notFoundPage/notFoundPage.tsx";
import { divider } from "@nextui-org/react";

// function generateCategoryRoutes(
//   categories: { [key: string]: Subcategory },
//   basePath = "/kategori"
// ): JSX.Element[] {
//   return Object.entries(categories).map(([key, category]) => (
//     <Route path={`${basePath}/${key}`} element={<CategoryPage />} key={key}>
//       {category.subcategories
//         ? generateCategoryRoutes(category.subcategories, `${basePath}/${key}`)
//         : null}
//     </Route>
//   ));
// }

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/all-items" element={<div>all-items</div>} />
            <Route path="/:category" element={<CategoryPage />} />
            <Route path="/:category/:subcategory" element={<CategoryPage />} />
            <Route
              path="/:category/:subcategory/:subsubcategory"
              element={<CategoryPage />}
            />
            <Route
              path="/product/:productId"
              element={<div>product/:productId</div>}
            />

            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              {/* <Route path="/profile" element={<Profile />} /> */}
              {/* Admin-only route */}
              <Route element={<ProtectedRoute admin={true} />}>
                {/* <Route path="/admin" element={<Admin />} /> */}
              </Route>
            </Route>
            {/* Catch-all for 404, outside MainLayout to avoid rendering layout components */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;

// Lazy-loaded pages
// const Products = lazy(() => import("./pages/Products"));
// const ProductDetail = lazy(() => import("./pages/ProductDetail"));
// const Signin = lazy(() => import("./pages/Auth/Signin"));
// const Signup = lazy(() => import("./pages/Auth/Signup"));
// const Profile = lazy(() => import("./pages/Profile"));
// const Cart = lazy(() => import("./pages/Cart"));
// const Admin = lazy(() => import("./pages/Admin"));
// const Error404 = lazy(() => import("./pages/Error404"));
