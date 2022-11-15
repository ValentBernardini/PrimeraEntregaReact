import Item from '../Item/Item'

 export const ItemList = ({productList = []}) => {
  return(
     productList.map((data) =>
     <Item key={data.id} product={data}/>
     )
  );
 }



