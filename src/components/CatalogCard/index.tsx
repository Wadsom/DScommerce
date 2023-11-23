import "./style.css";
import { ProductDTO } from "../../Entity_Models/Product";

type Props ={
  product:ProductDTO;
}



export default function CatalogCard({product}:Props){


    return(
        <div className="dsc-card">
        <div className="dsc-catalog-card-top dsc-line-bottom">
          <img src={product.imgUrl} alt={product.name} />
        </div>
        <div className="dsc-catalog-card-bottom">
          <h3>R$ {product.valor}</h3>
          <h4>
            {product.name};
          </h4>
        </div>
      </div>

    )
      
}
