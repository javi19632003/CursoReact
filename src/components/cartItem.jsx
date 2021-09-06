export default function CartItem ({id, desc, cant, preuni}) {

    return(
        <>
            <div className='cartitem'>
                <p className='cartitem1'>{id}</p>
                <p className='cartitem1'>{cant}</p>
                <p className='cartitem2'>{desc}</p>
                <p className='cartitem1'>{preuni}</p>
            </div>
        </>

    )
}