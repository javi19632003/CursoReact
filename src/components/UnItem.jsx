

export default function UnItem ({desc = ' ', preuni = 0, caract = ' ', stk = 0, urlfoto = ' '}){

    return (
        <>
         <div className='impitem'>
            <img className='img-fluid' src= { '.'+urlfoto } alt=""></img>
         </div>
         <div> { desc } </div>
         <div> { preuni } </div>
         <div> { caract } </div>
         <div> { stk } </div>
        </>
    )

} 