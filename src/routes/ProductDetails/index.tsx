import "./style.css";
import HeaderClient from "../../components/HeaderClient";
import BodyClient from "../../components/BodyClient";
import BttnInverse from "../../components/BttnInverse";
import { ButtonModel } from "../../Entity_Models/bttn";
import BttnPrimary from "../../components/BttnPrimary";
import { ProductDTO } from "../../Entity_Models/Product";

const BttnBuy: ButtonModel = {
  id: 3,
  name: "Comprar",
};
const BttnHome: ButtonModel = {
  id: 0,
  name: "Inicio",
};

const product: ProductDTO = {
  id: 1,
  name: "Smart TV",
  valor: 5500,
  description: "Está tv é muito bonita!!",
  imgUrl:
    "https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/2-big.jpg?raw=true",
  Category: [
    {
      id: 3,
      name: "Eletrônicos",
    },
    {
      id: 4,
      name: "Computador",
    },
    {
      id: 7,
      name: "Importados",
    },
  ],
};
export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <BodyClient product={product} />

          <div className="dsc-btn-page-container">
            <BttnPrimary key={BttnBuy.id}  CategoryBttn={BttnBuy} />
            <BttnInverse key={BttnHome.id}  CategoryBttn={BttnHome} />
          </div>
        </section>
      </main>
    </>
  );
}
