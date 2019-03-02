import React, { Component } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    console.log(this.props.allPhoneNumbers);
    return (
      <div>
        <Header heading="Phone Directory" />
        <br />
        <p className="container">
          <Link class="btn green darken-2" to="/add">
            Add
          </Link>
        </p>
        <br />
        <div className="container">
          <table className="highlight">
            <thead>
              <tr>
                <th>NAME</th>
                <th>PHONE</th>
              </tr>
            </thead>
            <tbody>
              {this.props.allPhoneNumbers.map((obj, index) => (
                <tr key={index}>
                  <td>{obj.name}</td>
                  <td>{obj.number}</td>
                  <td>
                    <button
                      className="btn red"
                      onClick={event => {
                        event.preventDefault();
                        this.props.deletePhoneNumber(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Home;
