import React from  "react";
import "../StartButton.css";

class StartButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      active:false
    };
    this.toggleClass=this.toggleClass.bind(this);
  }
  toggleClass(){
    this.setState({
      active: true
    });
  }

  render(){
    return(

      <button onClick={this.toggleClass} className={this.state.active ? "div animated pulse rollOut  start_button_container ":"div animated zoomIn start_button_container"}>
        <div className="div ">
          <p className="event_desc">{this.props.value}</p>
        </div>
      </button>

    );
  }
}

export default StartButton;
