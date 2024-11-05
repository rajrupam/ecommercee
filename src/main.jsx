// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from './components/Header';
// import HomePage from '../src/page/home-page/Homepage.component';



// import productCategoriesData from '../src/page/home-page/product-category';
// import shopdatas from '../src/page/shop-page/shop-data'
// import ShopPage from "./page/shop-page/shop-page";
 
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:(
//       <>
//        <Header/>
//        <HomePage productCategories={productCategoriesData.sections} /></>
//     ),
//   },
//   {
//     path: "/shop",
//     element:  <ShopPage shopdatas={shopdatas} />,
//   },
// ]);
 
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <App /> */}
//     <RouterProvider router={router} />
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/Header';
import HomePage from '../src/page/home-page/Homepage.component';
import ShopPage from "./page/shop-page/shop-page";


import productCategoriesData from '../src/page/home-page/product-category';
import shopdatas from '../src/page/shop-page/shop-data';
import CategoryPage from "./components/CategoryPage/categorypage";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage productCategories={productCategoriesData.sections} />
      </>
    ),
  },
  {
    path: "/shop",
    element: <ShopPage shopdatas={shopdatas} />,
  },
  {
    path: "/shop/:category", 
    element: <CategoryPage shopdatas={shopdatas} />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
