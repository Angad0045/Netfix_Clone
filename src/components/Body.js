import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login_Page from "./Login_Page";
import Browse_Page from "./Browse_Page";
import Movies_Page from "./Movies_Page";
import TV_Shows_Page from "./TV_Shows_Page";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login_Page />,
    },
    {
      path: "/browse",
      element: <Browse_Page />,
    },
    {
      path: "/tv shows",
      element: <TV_Shows_Page />,
    },
    {
      path: "/movies",
      element: <Movies_Page />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
