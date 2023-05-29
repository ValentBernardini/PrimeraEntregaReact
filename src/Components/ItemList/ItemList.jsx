import Item from '../Item/Item'
import './itemList.css'


export const ItemList = ({productList = []}) => {
   return (
     <div className="ItemList">
       {productList.map((data) => (
         <Item key={data.id} product={data} />
       ))}
     </div>
   );
 };
 

