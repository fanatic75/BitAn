import React, { Component } from 'react';
import StartPage from  "./components/StartPage";
import ChattingPage from "./components/ChattingPage";

class App extends Component {
  render() {
    return (

          <div className="page_content">
            <StartPage />
            <ChattingPage />
          </div>

    );
  }
}

export default App;
