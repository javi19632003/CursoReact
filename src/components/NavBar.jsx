import Button from "./Button"
import CartWidged from "./CartWidged"

export default function NavBar() {

    return(
        <>
        <div>
        <Button  text='Nosotros' /> 
        <Button  text='Productos'/> 
        <Button  text='Venta Telefonica'/> 
        <Button  text='Sucursales'/> 
        <Button  text='Contactos'/>
        <CartWidged />
        </div>
    </>
    )
}