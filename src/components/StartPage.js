import React from "react";
import StartButton from "./StartButton";
import LoadingLogo from "./LoadingLogo";

class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.loadingToggle = this.loadingToggle.bind(this);
  }


  loadingToggle() {
    this.setState({
      loading: true,
    });
  }
  render() {
    if (!this.props.visibility) {
      return (
        <React.Fragment>
          <StartButton loading={this.state.loading} loadingToggle={this.loadingToggle} />
          <LoadingLogo visibilityToggle={this.props.visibilityToggle} visibility={this.props.visibility} loading={this.state.loading} />
        </React.Fragment>
      );
    } else {
      return (null);
    }
  }
}

export default StartPage;
