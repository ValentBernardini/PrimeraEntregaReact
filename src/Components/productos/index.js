import IMG from "../../images/img01.jpg";

export const ProductosLista = () => {
  return (
    <>
    <h1 className="title">Productos</h1>
    <div className="productos">
        <div className="producto">
            <a href="#">
            <div className="producto__img">
            <img  src={IMG} alt=""></img>
            </div>
        </a>
        <div className="producto__footer">
            <h1> Title </h1>
            <p> Categoria</p>
            <p className="price">$320</p>
        </div> 
        <div className="bottom">
                <button className="btn">
                Agregar al carrito
                </button>
                <div>
                <a href="#" className="btn">Vista</a>
          </div>
        </div>
       </div> 
      </div>
      <div className="productos">
        <div className="producto">
            <a href="#">
            <div className="producto__img">
            <img  src={IMG} alt=""></img>
            </div>
        </a>
        <div className="producto__footer">
            <h1> Title </h1>
            <p> Categoria</p>
            <p className="price">$320</p>
        </div> 
        <div className="bottom">
                <button className="btn">
                Agregar al carrito
                </button>
                <div>
                <a href="#" className="btn">Vista</a>
          </div>
        </div>
       </div> 
      </div>
      <div className="productos">
        <div className="producto">
            <a href="#">
            <div className="producto__img">
            <img  src={IMG} alt=""></img>
            </div>
        </a>
        <div className="producto__footer">
            <h1> Title </h1>
            <p> Categoria</p>
            <p className="price">$320</p>
        </div> 
        <div className="bottom">
                <button className="btn">
                Agregar al carrito
                </button>
                <div>
                <a href="#" className="btn">Vista</a>
          </div>
        </div>
       </div> 
      </div>
    </>
  )
}

export default ProductosLista;