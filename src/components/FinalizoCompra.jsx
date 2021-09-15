import  { Link } from "react-router-dom"


export default function FinalizoCompra (id = "pepe") {

    return (
        <>
         <div>
            <h2>Gracias pos su compra</h2>
            <h3>Su Orden de Pedido es : {id} </h3>
            <h4>Esperamos vuelva pronto</h4>
            <Link to='/'> <button>ir a comprar</button> </Link> 
         </div>
        </>

    )
}