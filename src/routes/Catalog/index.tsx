import "./style.css";
import HeaderClient from "../../components/HeaderClient";
import SearchCard from "../../components/SearchCard";
import CatalogCard from "../../components/CatalogCard";
import BttnNextPage from "../../components/BttnNextPage";
import { ProductDTO } from "../../Entity_Models/Product";

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

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchCard />

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
          </div>
          <BttnNextPage />
        </section>
      </main>
    </>
  );
}
