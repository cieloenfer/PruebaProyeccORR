import { useParams } from "react-router-dom";
import ItemList  from "./ItemList";
import { useState, useEffect } from "react";
import dataJSON from '../data.json';

const mockAPI = (categoryName) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {

        if(categoryName != undefined ) {
          const productosFiltrados = dataJSON.filter((item) => item.category =  categoryName
        );
         resolve(productosFiltrados)
        }else{
          resolve(dataJSON)
      } 
     }, 2000);
    });
  };

export default function ItemListContainer(){
    const [data, setData] = useState([]);
    const {categoryName} = useParams();

    useEffect(() => {
      mockAPI(categoryName).then((data) => setData(data));
    
  },{categoryName} );
   
    return (
        <div className="item-List-Container"><ItemList data={data}/></div>
        
    );

};





