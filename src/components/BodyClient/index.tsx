import "./style.css";
import ProductCategory from "../ProductCategory";
//import BodyBttnPages from '../BodyBttnPages';
import { ProductDTO } from "../../Entity_Models/Product";


type Props ={
  product: ProductDTO;

}

export default function BodyClient({product} : Props ) {
  return (
    <div className="dsc-card dsc-mb20">
      <div className="dsc-product-details-top dsc-line-bottom">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="dsc-product-details-bottom">
        <h3>R$ {product.valor.toFixed(2)}</h3>
        <h4>{product.name}</h4>
        <p>
          {product.description}
        </p>
        <div className="dsc-category-container">
          {
            product.Category.map(CategoryProd => (
              <ProductCategory key={CategoryProd.id} name={CategoryProd.name} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
