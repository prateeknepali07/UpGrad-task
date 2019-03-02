import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav class="grey darken-4">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">
            {this.props.heading.toUpperCase()}
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
