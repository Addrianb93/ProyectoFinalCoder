import React from 'react';
import { useEffect , useState} from 'react';

import Container from 'react-bootstrap/Container';
import Item from './Item';
import { useParams } from 'react-router-dom';

let productosIniciales = [
    {id:'ford', nombre: "Focus"}, 
    {id:'ford', nombre: "Ranger"}, 
    {id:'peugeot', nombre: "208"}, 
    {id:'peugeot', nombre: "307"}, 
    {id:'chevrolet', nombre: "Astra"}
];


function ItemListContainer() {

  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(()=>{
    let simulacionPedido = new Promise((res)=>{
      setTimeout(()=>{
          res(productosIniciales)
      },2000)
  })

  if (id) {
    console.log("Pido todo");
  }else{
    console.log("Pido"+id);
  }

  simulacionPedido
  .then((respuesta)=>{
    setItems(respuesta);
  })
  .catch((error)=>{
    console.log(error);
  })
}, [ id ]);

  return (
    <Container>
      { items.lenght == 0 ? <h1>Cargando...</h1> : <Item items={items} />}
    </Container>
  );
}

export default ItemListContainer;