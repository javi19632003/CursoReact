export default function CartItem ({id, desc, cant}) {

    return(
        <>
            <div>
                <p>{id}</p>
                <p>{desc}</p>
                <p>{cant}</p>
            </div>
        </>

    )
}