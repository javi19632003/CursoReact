import Button from "./Button"
import CartWidged from "./CartWidged"
import  { Link } from "react-router-dom"

export default function NavBar() {

    return(
        <>
        <div className='col-md-2 well' >
        <Button  text='Home' milink="/" /> 
        </div>
        <div className='col-md-2 well' >
        <Button  text='Auto-Foco' milink="/Auto-Foco"/> 
        </div>
        <div className='col-md-2 well' >
        <Button  text='Combos'  milink="/Combos"/> 
        </div>
        <div className='col-md-2 well' >
        <Button  text='Full-Frame'  milink="/Full-Frame"/>
        </div>
        <CartWidged />
    </>
    )
}