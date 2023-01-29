import React, { Component } from "react"
import "./App.css"
import { MainMenu } from "./MainMenu";

export class App extends Component {
  render() {
    return (
      <div className="App">
          <MainMenu/>
        <header className="App-header">
          <p>
            the-cosy-corner.co.uk
          </p>
        </header>
      </div>
    )
  }
}

export default App
