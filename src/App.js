import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import EvertonBrow from "./pages/EvertonBrow";
import NoPage from "./pages/NoPage";
import TopMenu from "./components/TopMenu";

export class App extends Component {
  render() {
    return (
      <>
        <TopMenu />
        <RouterProvider
          router={createBrowserRouter([
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "home",
              element: <Home />,
            },
            {
              path: "everton-brow",
              element: <EvertonBrow />,
            },
            {
              path: "*",
              element: <NoPage />,
            },
          ])}
        />
      </>
    );
  }
}

export default App;
