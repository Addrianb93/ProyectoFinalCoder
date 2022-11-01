import React from 'react';
import { useEffect , useState} from 'react';

import Container from 'react-bootstrap/Container';
import Item from './Item';
import { useParams } from 'react-router-dom';

let vehiculos = [
    {id:'ford', nombre: "Focus"}, 
    {id:'ford', nombre: "Ranger"}, 
    {id:'peugeot', nombre: "208"}, 
    {id:'peugeot', nombre: "307"}, 
    {id:'chevrolet', nombre: "Astra"}
];


function ItemListContainer() {

  const [estado,setEstado] = useState([]);
  const { id } = useParams();

  useEffect(()=>{
    let MostrarVehiculos = new Promise((res)=>{
      setTimeout(()=>{
          res(vehiculos)
      },2000)
  })


  MostrarVehiculos
  .then((respuesta)=>{
    setEstado(respuesta);
  })
  .catch((error)=>{
    setEstado(error);
  })
}, [ id ]);

  return (
    <Container>
     { estado.length == 0 ? <h1>Cargando...</h1> : <Item estado={estado} /> }
    </Container>
  );
}

export default ItemListContainer;