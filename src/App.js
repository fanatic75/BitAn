import React, { Component } from 'react';
import StartButton from "./components/StartButton"


class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="Appheader">
            <nav>

            </nav>
          </header>

          <div className="page_content">
            <StartButton value="START CHAT" />
          </div>

      </div>
    );
  }
}

export default App;
