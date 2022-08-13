import React, { Component } from "react";

class DetailsThumb extends Component {
  render() {
    const { images, tab, myRef } = this.props;
    return (
      <div className="thumb" ref={myRef}>
        {images.map((img, index) => (
          <img
            src={img}
            key={index}
            onClick={() => {
              tab(index);
            }}
          ></img>
        ))}
      </div>
    );
  }
}

export default DetailsThumb;
