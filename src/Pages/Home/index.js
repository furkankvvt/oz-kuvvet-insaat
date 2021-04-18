import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

class index extends React.Component {
  state = {
    basketItems: [],
  };

  addToBasket = (info) => {
    let temp = this.state.basketItems;
    temp.push(info);
    this.setState({ basketItems: temp });
  };

  render() {
    const { basketItems } = this.state;
    return (
      <>
        <Header basketItems={basketItems} />
        <Main addToBasket={(info) => this.addToBasket(info)} />
        <Footer />
      </>
    );
  }
}

export default index;
