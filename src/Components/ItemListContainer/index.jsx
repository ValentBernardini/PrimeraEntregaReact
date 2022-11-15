
import { data } from '../../data/data';
import { useState, useEffect } from "react";
import {ItemList} from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = ()=> {
    const [productList, setproductList] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getProductList = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(data)
            },1000);
        });
        if (categoriaId){
            getProductList.then(response =>setproductList( response.filter(data => data.category === categoriaId)));
        }else
        getProductList.then(response => setproductList(response));
    },[categoriaId])

    

   return(
        <>
        <ItemList productList={productList}/>
        </>

   )
   
   
}

export default ItemListContainer;