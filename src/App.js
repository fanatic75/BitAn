import React, { Component } from 'react';
import StartPage from  "./components/StartPage";
import ChattingPage from "./components/ChattingPage";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      visibility:false,
    };
    this.visibilityToggle=this.visibilityToggle.bind(this);
  }
    visibilityToggle(){
      this.setState({
        visibility:true,
      });
    }

  render() {


    return (

          <React.Fragment>
            <StartPage visibility={this.state.visibility} visibilityToggle={this.visibilityToggle} />
            <ChattingPage visibility={this.state.visibility}/>
          </React.Fragment>
    );
  }
}

export default App;
