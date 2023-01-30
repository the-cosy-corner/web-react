import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import EvertonBrow from "./pages/EvertonBrow";
import EvertonBrowQrCode from "./pages/QR-Codes/EvertonBrowQRCode";
import NoPage from "./pages/NoPage";
import TopMenu from "./components/TopMenu";

export class App extends Component {
  render() {
    return (
      <div class="bg">
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
              path: "everton-brow/qr",
              element: <EvertonBrowQrCode />,
            },
            {
              path: "*",
              element: <NoPage />,
            },
          ])}
        />
      </div>
    );
  }
}

export default App;
