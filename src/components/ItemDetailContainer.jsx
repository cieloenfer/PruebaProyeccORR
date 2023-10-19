import { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";
import { useParams } from 'react-router-dom';


const mockAPI = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => 
            resolve(fetch('/data.json'))
        , 2000);
    })
}

export default function ItemDetailContainer(){
    const { id: itemId } = useParams();

    const [data , setData] = useState();

    useEffect(() => {
        fetch(fakestoreapi)
         ,then((res) => res.json())
         .then((data) => setData(data))
    },[]);
    if (!data) return null;

    return (
        <div className="item-list-container">
            <ItemDetail data={data}/>
        </div>
    )
}




