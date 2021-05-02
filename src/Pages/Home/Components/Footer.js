import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="header border-bottom-3px m-top-12">
          <div className="infoBar center">
            <div className="container row space-between"></div>
          </div>
          <div className="logoBar center bg-323a45">
            <div className="container"></div>
          </div>
          <div className="menuBar center">
            <div className="container center">
              <span style={{ fontSize: 12 }}>
                designed and developed by Furkan Kuvvet
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
