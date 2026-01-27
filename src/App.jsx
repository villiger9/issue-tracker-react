import Home from "./Home";
import Create, { createIssueAction } from "./Create";
import IssueDetails from "./IssueDetails";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route
        path="create"
        element={<Create />}
        action={createIssueAction}
      ></Route>
      <Route path="issues/:id" element={<IssueDetails />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>,
  ),
);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
