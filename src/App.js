import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Forms from "./Components/Forms/forms";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPhoneNumbers: []
    };
  }
  savePhoneNumber = obj => {
    this.setState({
      allPhoneNumbers: [...this.state.allPhoneNumbers, obj]
    });
  };
  deletePhoneNumber = index => {
    this.setState({
      allPhoneNumbers: [
        ...this.state.allPhoneNumbers.slice(0, index),
        ...this.state.allPhoneNumbers.slice(index + 1)
      ]
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            path="/"
            render={props => (
              <Home
                {...props}
                allPhoneNumbers={this.state.allPhoneNumbers}
                deletePhoneNumber={this.deletePhoneNumber}
              />
            )}
            exact
          />
          <Route
            path="/add"
            render={props => (
              <Forms {...props} savePhoneNumber={this.savePhoneNumber} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
