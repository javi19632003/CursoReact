import ItemCount from "./ItemCount";

export default function Item({desc, preuni}) {
    console.log("entré en Item");
    return (
        <>
            <div> { desc } </div>
            <div> { preuni } </div>
            <ItemCount stock= {5} inicial = {1} />
        </>
    )
}