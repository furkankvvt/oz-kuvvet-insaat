import React from "react";

let db;

class Body extends React.Component {
  state = {
    product: [],
  };

  getId = () => {
    const url = new URL(window.location.href);
    const path = url.pathname;
    let arr = path.split("/");
    if (arr.length === 3) {
      let id = arr[2];
      return id;
    }
    return null;
  };

  getProduct = async (id) => {
    return db
      .collection("products")
      .where("id", "==", parseInt(id))
      .get()
      .then((querySnapshot) => {
        const item = querySnapshot.docs.map((item) => {
          return item.data();
        });
        return item;
      });
  };

  async componentDidMount() {
    db = this.props.db;
    const id = this.getId();
    const product = await this.getProduct(id);
    if (product?.length > 0) {
      this.setState({ product: product[0] });
    }
  }

  render() {
    const { product } = this.state;
    console.log(product);
    return (
      <main>
        <div className="body">
          <div className="details center">
            <div className="container bg-dc row">
              <div className="left-side">
                <img
                  src={"/" + product.image}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{ borderRadius: 6, objectFit: "fill" }}
                />
              </div>
              <div className="right-side">
                <div className="padding-24">
                  <p>
                    <span>Proje Bilgileri</span>
                  </p>
                  <p>
                    <span>Şehir: {product.cityText}</span>
                  </p>
                  <p>
                    <span>İlçe: {product.districtText}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Body;
