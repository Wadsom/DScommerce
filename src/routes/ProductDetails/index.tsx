import './style.css';
import HeaderClient from "../../components/HeaderClient";
import BodyClient from "../../components/BodyClient";
import BttnInverse from "../../components/BttnInverse";
import BttnPrimary from "../../components/BttnPrimary";

export default function ProductDetails(){

    return(
        <>
        <HeaderClient />
        <main>
          <section id="product-details-section" className="dsc-container">
            <BodyClient />
  
            <div className="dsc-btn-page-container">
              <BttnPrimary />
              <BttnInverse />
            </div>
          </section>
        </main>
      </>
    )
}