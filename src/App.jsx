import React from "react";
import { RouterProvider  } from "react-router-dom";
import Router from "./routes";
import { ScrollToTop } from "./utils";

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={Router} >
        <ScrollToTop/>
      </RouterProvider>
    </React.StrictMode>
  )
}

export default App
