import Home from "./Home";
import Create from "./Create";
import IssueDetails from "./IssueDetails";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="create" element={<Create />}></Route>
      <Route path="issues/:id" element={<IssueDetails />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/* import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom";

// 1. Define the router outside the component
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}> {// RootLayout contains your Navbar and Outlet }
      <Route index element={<Home />} />
    </Route>
  )
); 

function App() {
  // 2. Use RouterProvider instead of <Router>
  return <RouterProvider router={router} />;
} */
