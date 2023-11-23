import "./style.css";
import HeaderClient from "../../components/HeaderClient";
import SearchCard from "../../components/SearchCard";
import CatalogCard from "../../components/CatalogCard";
import BttnNextPage from "../../components/BttnNextPage";

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchCard />

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
          </div>
          <BttnNextPage />
        </section>
      </main>
    </>
  );
}
