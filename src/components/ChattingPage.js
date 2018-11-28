import React from "react";

import MenuAppBar from "./MenuAppBar";

class ChattingPage extends React.Component{
  render(){
    if(this.props.visibility)document.body.style.backgroundColor = "white";

    if(this.props.visibility){
      return(
        <MenuAppBar />
        
      );
    }else{
      return(null);
    }
  }
}

export default ChattingPage;
