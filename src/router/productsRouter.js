import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";

const productsRouter = () => {

  const Loading = <div>Loading....</div>
  const ProductsList = lazy(() => import("../pages/products/ListPage"))
  const ProductsAdd = lazy(()=> import("../pages/products/AddPage"))

  return [
    {
      path: "list",
      element: <Suspense fallback={Loading}><ProductsList/></Suspense>
    },
    {
      path: "",
      element: <Navigate replace to="/products/list"/>
    },
    {
      path: "add",
      element: <Suspense fallback={Loading}><ProductsAdd/></Suspense>
    }
  ]
}
export default productsRouter;
