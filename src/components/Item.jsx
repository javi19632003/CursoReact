export default function Item({desc, preuni}) {
    console.log("entré en Item");
    return (
        <>
         <div>
              <div> { desc } </div>
              <div> { preuni } </div>
          </div>
        </>
    )
}