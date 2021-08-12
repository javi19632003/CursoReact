import Item from "./Item";
export default function ItemList({items}) {

    const mokArticu = [
        {
          id: '1',
          desc: 'Cámara compacta full-frame Alpha 7C',
          preuni: 5230,
          urlfoto: './img/camara1.png'
        },
        {
          id: '2',
          desc: 'Cámara full-frame a9 II con capacidad profesional - | ILCE-9M2/B E38',
          preuni: 100.50,
          urlfoto: './img/camara2.png'
        },
        {
          id: '3',
          desc: 'Cámara APS-C a6100 con enfoque automático rápido',
          preuni: 1523.15,
          urlfoto: './img/camara3.png'
        },
        {
          id: '4',
          desc: 'Cámara a6400 + SELP18105G',
          preuni: 6000.00,
          urlfoto: './img/camara4.png'
        },
        {
          id: '5',
          desc: 'a1 con una resolución y velocidad superiores',
          preuni: 3560.00,
          urlfoto: './img/camara5.png'
        },
        {
          id: '6',
          desc: 'Cámara RX100 III avanzada con sensor tipo 1.0',
          preuni: 4530,
          urlfoto: './img/camara6.png'
        }

      ];
       // generando nuestra simulacion de api call
  const getArticulos = () => {
    console.log('Esperamos que responda ....');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Buscamos todos los articulos del mok
        const mapArti = mokArticu.map(mapArti => <Item key = {mapArti.id} desc={mapArti.desc} preuni={mapArti.preuni} /> );
         resolve(mapArti);
        // En caso de que "maparti" sea "null" o "undefined"
        // resolve() no se ejecutara y vamos a devolver un error
        // con un objeto de status 404
        reject({
          status: 404
        });
      }, 2000);
    });
  };
  
  const myPromise = new Promise(async (resolve, reject) => {
    const mapArti = await getArticulos().catch(
      err => reject(err)
    );
   
    mapArti? resolve(mapArti) : reject('No hay articulos');
  });
  
  myPromise.then(result => console.log(result)).catch(err => console.log(err));
    return (
        <>
          
        </>
    )
}