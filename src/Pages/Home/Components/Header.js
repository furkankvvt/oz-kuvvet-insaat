import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header border-bottom-3px">
          <div className="infoBar center">
            <div className="container row space-between">
              <div className="mail center">
                <i className="fa fa-envelope-o mr12" />
                <span>furkankuvvet@gmail.com</span>
              </div>
              <div className="phone center">
                <i className="fa fa-phone mr12" />
                <span>0212 123 45 67</span>
              </div>
            </div>
          </div>
          <div className="logoBar center">
            <div className="container">
              <div className="logo center">
                <i className="fa fa-bookmark-o mr12 px24" />
                <span style={{ fontSize: 24, color: "#323a45" }}>
                  Furkan Kuvvet
                </span>
              </div>
            </div>
          </div>
          <div className="menuBar center">
            <div className="container">
              <div className="menu center space-between">
                <a href="/">
                  <span>Ana Sayfa</span>
                </a>
                <span>Hakkımızda</span>
                <span>İletişim</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
