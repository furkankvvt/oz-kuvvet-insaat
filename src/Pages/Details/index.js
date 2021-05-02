import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Body from "./Components/Body";

class index extends React.Component {
  render() {
    const { db } = this.props;
    return (
      <>
        <Header />
        <Body db={db} />
        <Footer />
      </>
    );
  }
}

export default index;
