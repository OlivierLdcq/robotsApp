import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div
          className="cardImg"
          style={{
            backgroundImage: `url(https://robohash.org/${this.props.id})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <h3>{this.props.name}</h3>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default Card;
