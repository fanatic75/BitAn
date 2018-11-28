import React from  "react";
import "../StartButton.css";
import { CSSTransition } from 'react-transition-group';
class StartButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      active:true
    };
    this.toggleClass=this.toggleClass.bind(this);
  }
  toggleClass(){
    this.setState({
      active: false,
    });
  }

  render(){
    return(
    <CSSTransition
    in={this.state.active}
             timeout={{appear:1000,exit:1500}}
             appear={true}
             classNames="animation"
             unmountOnExit={true}
              >
      <button onClick={this.toggleClass} className="div  ">
        <div className="div ">
          <p className="event_desc">START CHAT</p>
        </div>
      </button>
    </CSSTransition>
    );
  }
}

export default StartButton;
