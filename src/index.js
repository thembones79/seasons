import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: ""
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidMount() {
    alert("Mount");
  }

  componentDidUpdate() {
    alert("Update");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else if (!this.state.errorMessage && !this.state.lat) {
      return <div>Loading...</div>;
    } else {
      return <div>You're not supposed to see this!</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
