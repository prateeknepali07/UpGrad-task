import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.savePhoneNumber({ name, number });
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Header heading="Add Subscriber" />
        <br />
        <div className="container">
          <Link to="/">
            <b className="black-text">BACK</b>
          </Link>
        </div>
        <form class="col s12 container" onSumbit={this.handleSumbit}>
          <div class="row">
            <div class="input-field col s6">
              <input
                id="name"
                type="text"
                class="validate"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <label for="name">Name</label>
            </div>
            <div class="input-field col s6">
              <input
                id="number"
                type="number"
                class="validate"
                name="number"
                value={this.state.number}
                onChange={this.handleInputChange}
              />
              <label for="number">Number</label>
            </div>
          </div>
        </form>
        <div className="container">
          <b className="green-text text-darken-2">Subscriber to be added: </b>
          <br />
          <b>Name</b>: {this.state.name}
          <br />
          <b>Phone Number</b>: {this.state.number}
          <br />
          <br />
          <button
            class="waves-effect waves-light btn green darken-2"
            onClick={this.handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Forms;
