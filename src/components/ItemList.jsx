import React,{useEffect, useState} from "react";
import dataJson from "../data.json/";
import {item} from "./item";

function getServices(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(dataJson);
        }, 2000)
    });
}

export default function ItemList(){
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        getServices().then((data) => {
            setServices(data);
        }).finally(() =>{
            setLoading(false)
        });
    }, []);
}

if (loaging === true) return <p>Cargando ...</p>;

return(
    <div className="item-List">
        {services.map((serivce)=>(
            <item key={service.id} service={service}/>
        ))}
    </div>
)



