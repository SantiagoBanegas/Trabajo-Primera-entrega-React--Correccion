import React from 'react'

function ItemCount(props) {
    const [count, setCount] = React.useState(props.unidadInicial)

    function handleSubtract(props){
        if (count > props.unidadInicial){
            setCount(count - 1)
        }
        else{
            alert("1 es el minimo de compra")
    }
    }
    
    function handleAdd(props){
        if (count < props.stock){
            setCount( count + 1)
        }
        else{
            alert("No hay mas stock")
    }
    }
    

return (
    <div>
        <button onClick={handleSubtract}>-</button>
        <span>{count}</span>
        <button onClick={handleAdd}>+</button>
    </div>
    );
}

export default ItemCount