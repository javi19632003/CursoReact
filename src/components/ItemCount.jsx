import React, { useState } from 'react';

  const useItemCount = (stock = 0, inicial = 0 )  =>{
    
    const [cantArti, setCantArti] = useState(inicial)

    const sumo = () => {
        if (cantArti < stock) setCantArti(cantArti + 1)
    }
    
    const resto = () => {
        if (cantArti > 1) setCantArti(cantArti - 1)
    }

    return {
        cantArti,
        sumo,
        resto
    }
}

export default function ItemCount({stock = 0, inicial = 0 , onAdd = () =>{} }) {

    const {cantArti, sumo, resto} = useItemCount(stock, inicial) 

    return (
        <>
            <div className='enlinea' >
                <button  className = 'btn btn-dark' onClick={() => sumo()}>+</button>
                <div className = 'divitem'>{cantArti}</div>
                <button className = 'btn btn-dark' onClick={() => resto()}>-</button>
            </div>
            <div >
                <button  className = 'btn btn-primary btn-sm'> Agregar a Carrito</button>
            </div>
        </>
    )
}