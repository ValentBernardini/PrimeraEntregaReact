import { Link } from "react-router-dom";

 const Item = ({product}) => {
  return (
    
    <Link to={`/detalle/${product.id}`} className="Card_Item">
      < img src={product.image} alt=""/>
      <h2>Producto {product.title}</h2>
      <p>Categoria {product.category}</p>
      <p>Precio {product.price}</p>
    </Link>
    
  );
}

export default Item;



