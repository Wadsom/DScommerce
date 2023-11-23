import "./style.css";
import HeaderClient from "../../components/HeaderClient";
import BodyClient from "../../components/BodyClient";
import BttnInverse from "../../components/BttnInverse";
import BttnPrimary from "../../components/BttnPrimary";
import { ProductDTO } from "../../entity/Product";

const product : ProductDTO = {
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
  ],
};
export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <BodyClient product ={product} />

          <div className="dsc-btn-page-container">
            <BttnPrimary />
            <BttnInverse />
          </div>
        </section>
      </main>
    </>
  );
}
