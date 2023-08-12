import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Add from "../components/Add";
import Update from "../components/Update";
import ShowData from "../components/ShowData";

// Create a BrowserRouter instance with defined routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>, // Render the Main component at the root path
    children: [
      {
        path: "/add",
        element: <Add></Add>, // Render the Add component at the /add path
      },
      {
        path: "/update/:id",
        element: <Update></Update>, // Render the Update component at dynamic /update/:id paths
        loader: ({ params }) => fetch(`http://localhost:5001/add/${params.id}`), // Fetch data for the Update component
      },
      {
        path: "/showdata",
        element: <ShowData></ShowData>, // Render the ShowData component at the /showdata path
        loader: () => fetch("http://localhost:5001/add"), // Fetch data for the ShowData component
      },
    ],
  },
]);

export default router;
