import { useEffect, useState } from "react"
import data from "../../data/data";
import ItemDetail from '../../Components/ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [data, setData] = useState();
    const {detalleId} = useParams();

   

 useEffect(() =>{
    const getData = new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000)
    });

    getData.then(response => setData(response.find(data => data.category === parseInt(detalleId))));
    
 }, []);


    return (
    <ItemDetail data={data}/>
  );
}

export default ItemDetailContainer;