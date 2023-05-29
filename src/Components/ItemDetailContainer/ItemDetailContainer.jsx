import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();

  useEffect(() => {
    const getProductDetail = new Promise((resolve) => {
      setTimeout(() => {
        const product = data.find((item) => item.id === parseInt(productId));
        resolve(product);
      }, 1000);
    });

    getProductDetail.then((response) => setProductDetail(response));
  }, [productId]);

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Aquí puedes implementar la lógica para agregar el producto al carrito
    // Puedes usar el estado 'productDetail' y 'quantity' para realizar las operaciones necesarias
    console.log(`Agregado al carrito: ${productDetail.title} (Cantidad: ${quantity})`);
  };

  return (
    <div className="container">
      {productDetail ? (
        <>
          <div className="image-container">
            <img src={productDetail.image} alt={productDetail.title} />
          </div>
          <div className="details-container">
            <h2>{productDetail.title}</h2>
            <p className="category">{productDetail.category}</p>
            <p className="price">${productDetail.price}</p>
            <p className="description">{productDetail.description}</p>
            <div className="quantity-container">
              <button className="quantity-btn" onClick={handleDecreaseQuantity}>-</button>
              <span className="quantity">{quantity}</span>
              <button className="quantity-btn" onClick={handleIncreaseQuantity}>+</button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>Agregar al carrito</button>
          </div>
        </>
      ) : (
        <p className="loading">Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
