import Button from "./Button"
import CartWidged from "./CartWidged"

export default function NavBar() {

    return(
        <>
        <div className='col-md-2 well' >
        <Button  text='Nosotros' /> 
        </div>
        <div className='col-md-2 well' >
        <Button  text='Productos'/> 
        </div>
        <div className='col-md-2 well' >
        <Button  text='Sucursales'/> 
        </div>
        <div className='col-md-2 well' >
        <Button  text='Contactos'/>
        </div>
        <CartWidged />
    </>
    )
}