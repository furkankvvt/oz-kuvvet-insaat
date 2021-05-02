import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

const city = [
  { value: null, label: "Hepsi (Şehir)" },
  { value: "istanbul", label: "İstanbul" },
  { value: "ankara", label: "Ankara" },
  { value: "izmir", label: "İzmir" },
  { value: "bursa", label: "Bursa" },
  { value: "samsun", label: "Samsun" },
  { value: "trabzon", label: "Trabzon" },
];

const district = [
  { city: null, value: null, label: "Hepsi (İlçe)" },
  { city: "samsun", value: "pelitkoy", label: "Pelitköy" },
  { city: "samsun", value: "cobanli", label: "Çobanlı" },
  { city: "samsun", value: "omur", label: "Ömür Evleri" },
  { city: "samsun", value: "turkis", label: "Türkiş" },
  { city: "trabzon", value: "yildizli", label: "Yıldızlı" },
  { city: "trabzon", value: "sogutlu", label: "Söğütlü" },
];

const price = [
  { value: null, label: "Hepsi (Fiyat)" },
  { value: "100k-300k", label: "100k - 300k" },
  { value: "300k-500k", label: "300k - 500k" },
  { value: "500k-750k", label: "500k - 750k" },
  { value: "750k+", label: "750k +" },
];

const status = [
  { value: null, label: "Hepsi (Durum)" },
  { value: "satisi-tamamlanan", label: "Satışı Tamamlanan" },
  { value: "satisi-devam-eden", label: "Satışı Devam Eden" },
];

const type = [
  { value: null, label: "Hepsi (Tip)" },
  { value: "1+0", label: "1+0" },
  { value: "1+1", label: "1+1" },
  { value: "2+1", label: "2+1" },
  { value: "3+1", label: "3+1" },
];

const ProductItem = ({ image, id }) => {
  return (
    <Link to={`/details/${id + 1}`}>
      <div key={id} className="product-item">
        <div className="product-image">
          <img
            src={image}
            alt=""
            width="100%"
            height="350px"
            style={{ borderRadius: 6, objectFit: "fill" }}
          />
        </div>
      </div>
    </Link>
  );
};

let db;

export default class Body extends React.Component {
  state = {
    selectedCity: null,
    selectedDistrict: null,
    selectedPrice: null,
    selectedStatus: null,
    selectedType: null,
    data: [],
  };

  async componentDidMount() {
    db = this.props.db;
    const products = await this.getProducts();
    this.setState({ data: products });
  }

  getProducts = async () => {
    return db
      .collection("products")
      .get()
      .then((querySnapshot) => {
        const item = querySnapshot.docs.map((item) => {
          return item.data();
        });
        return item;
      });
  };

  handleChange = (selectedOption, selectedOptionName) => {
    this.setState({ [selectedOptionName]: selectedOption.value });
  };

  renderData = () => {
    const {
      selectedCity,
      selectedDistrict,
      selectedPrice,
      selectedStatus,
      selectedType,
      data,
    } = this.state;

    const renderData = data
      .filter((item) => {
        const cityFilter = item.city === selectedCity || selectedCity === null;
        const districtFilter =
          item.district === selectedDistrict || selectedDistrict === null;
        const priceFilter =
          item.price === selectedPrice || selectedPrice === null;
        const statusFilter =
          item.status === selectedStatus || selectedStatus === null;
        const typeFilter = item.type === selectedType || selectedType === null;
        return (
          cityFilter &&
          districtFilter &&
          priceFilter &&
          statusFilter &&
          typeFilter
        );
      })
      .map((item, key) => {
        const { image, link } = item;
        return <ProductItem link={link} key={key} id={key} image={image} />;
      });

    return renderData;
  };

  render() {
    const {
      selectedCity,
      selectedDistrict,
      selectedPrice,
      selectedStatus,
      selectedType,
    } = this.state;

    const filteredDistrict = district.filter((item) => {
      return item.city === selectedCity || item.city === null;
    });

    return (
      <main>
        <div className="body">
          <div className="slider center">
            <div className="container bg-dc">
              <img src="./img/slide.jpg" alt="" />
            </div>
          </div>
          <div className="products center">
            <div className="container display-flex">
              <div className="left-filter">
                <div className="select-item">
                  <span style={{ color: "#323a45" }}>Filtrele</span>
                </div>
                <div className="select-item">
                  <Select
                    placeholder="Şehir"
                    options={city}
                    value={selectedCity?.label}
                    onChange={(selectedCity) => {
                      this.handleChange(selectedCity, "selectedCity");
                      this.setState({ selectedDistrict: null });
                    }}
                  />
                </div>
                <div className="select-item">
                  <Select
                    placeholder="İlçe"
                    options={filteredDistrict}
                    value={selectedDistrict ? selectedDistrict.label : null}
                    onChange={(selectedDistrict) =>
                      this.handleChange(selectedDistrict, "selectedDistrict")
                    }
                  />
                </div>
                <div className="select-item">
                  <Select
                    placeholder="Fiyat"
                    options={price}
                    value={selectedPrice?.label}
                    onChange={(selectedPrice) =>
                      this.handleChange(selectedPrice, "selectedPrice")
                    }
                  />
                </div>
                <div className="select-item">
                  <Select
                    placeholder="Satış Durumu"
                    options={status}
                    value={selectedStatus?.label}
                    onChange={(selectedStatus) =>
                      this.handleChange(selectedStatus, "selectedStatus")
                    }
                  />
                </div>
                <div className="select-item">
                  <Select
                    placeholder="Daire Tipi"
                    options={type}
                    value={selectedType?.label}
                    onChange={(selectedType) =>
                      this.handleChange(selectedType, "selectedType")
                    }
                  />
                </div>
              </div>
              <div className="right-products flex-wrap row">
                {this.renderData()}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
