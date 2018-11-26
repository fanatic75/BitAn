import React, { Component } from 'react';
import StartButton from "./components/StartButton"
import MenuAppBar from "./components/MenuAppBar"

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="Appheader">
            <nav>

            </nav>
          </header>

          <div className="page_content">
            <StartButton />
            <MenuAppBar />
          </div>

      </div>
    );
  }
}

export default App;
