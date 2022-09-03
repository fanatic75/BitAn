import React, { Component } from 'react';
import ChattingPage from "./components/ChattingPage";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      visibility:true,
    };
  }
    

  render() {


    return (

          <React.Fragment>
            <ChattingPage visibility={this.state.visibility}/>
          </React.Fragment>
    );
  }
}

export default App;
