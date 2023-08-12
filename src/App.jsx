import { RouterProvider } from "react-router-dom";
import router from "./Provider/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
