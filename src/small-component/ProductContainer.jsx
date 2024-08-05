import "../css/ProductContainer.css";
import productList from "./Products";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const ProductContainer = () => {
  const products = productList();
  const handleClick = (url) => {
    window.location.href = url; 
  };  

  return (
    <div className="ProductContainer">

      {products.map((product, index) => (
        <div key={index} className="single-product">
          <div className="map-card" tabIndex="0">
            <img className="img" src={product.img} alt="Product" />
            <p className="more-info">Click for more info</p>
            <div className="textBox">
              <p className="text head">{product.name}</p>
              <span>{product.sub_name}</span>
              <p className="text price">₱{product.price}</p>
              <Link to={product.url}>
                <CartButton onClick={() => handleClick(product.url)} />
              </Link>
            </div>
          </div>
          <div className="product-info">
            <div className="product-details">
              {/* Product Name */}
              <h1 data-content={product.promoText} data-nextcontent={product.promoText2}>{product.name}</h1>
              {/* Product rating */}
              <span className="hint-star star">
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarHalfIcon/>
              </span>
              {/* Important information about the product */}
              <p className="information">
                "{product.review}"
              </p>
         
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductContainer;
