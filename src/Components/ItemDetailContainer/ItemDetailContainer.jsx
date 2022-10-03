import React, {useState, useEffect} from 'react';
import { getSinlgeItems } from '../../Services/mockAPI';
import CardDetail from './CardDetail';
import {useParams} from "react-router-dom";

function ItemDetailContainer() {
    let [data, setData] = useState({});

    console.log(useParams);
    const { id } = useParams();

    useEffect(() => {
        getSinlgeItems(id).then((respuestaDatos) => 
            setData(respuestaDatos));
    }, [id]);

    return (
        <CardDetail 
            key={data.key} 
            img={data.img}
            tittle={data.tittle}
            detail={data.detail}
            paginas={data.paginas}
            autor={data.autor}/>
    )
}

export default ItemDetailContainer
