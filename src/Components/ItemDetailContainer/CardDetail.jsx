import React from 'react'


function CardDetail(props) {
    return (
        <div className='cardDetailContainer'>
            <div className='box'> <img src={props.img} alt="imagen detalle" /></div>
            <div className='box'>
                <h1>{props.tittle}</h1>
                <p>{props.detail}</p>
                <p>{props.paginas}</p>
                <h3>{props.autor}</h3>
            </div>
        </div>
    )
}

export default CardDetail