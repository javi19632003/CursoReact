import{ Link } from 'react-router-dom'

export default function Item({desc, preuni, urlfoto, cate, id}) {
    const currency = function(number){
        return new Intl.NumberFormat('en-IN', {style: 'currency',currency: 'INR', minimumFractionDigits: 2}).format(number);
    };
 
    return (
        <>
        <div className='enlinea'>
            <Link to={`/${cate}/${id}`}>
                <img className='img1'  src= { urlfoto } alt=""></img>
                <div className='txtitem'> { desc } </div>
                <div className='txtprecio'>  { currency(preuni) } </div>
            </Link>
        </div>    
        </>
    )
}