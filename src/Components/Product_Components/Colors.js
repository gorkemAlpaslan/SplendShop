import React, { Component } from "react";

export class Colors extends Component {
  render() {
    const { colors } = this.props;
    return (
      <div className="colors">
        {colors.map((color, index) => (
          <div style={{ background: color }} key={index}></div>
        ))}
      </div>
    );
  }
}

export default Colors;
