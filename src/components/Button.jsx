
import  { Link } from "react-router-dom"

export default function Button({ text = '', milink = '' } ) {
    
    return( 
    <>       
       <Link to={milink}> <button className='btn btn-sm btn-outline-secondary'>{text}</button> </Link>  
    </>
    )
}

