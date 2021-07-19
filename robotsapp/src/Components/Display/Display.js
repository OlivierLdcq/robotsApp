import React, { Component } from "react";
import Card from "../Card/Card";
import "./Display.css";
class Display extends Component {
  render() {
    return (
      <div className="Display">
        {this.props.usersList.map((user) => {
          return <Card id={user.id} name={user.name} email={user.email} />;
        })}
      </div>
    );
  }
}
export default Display;
