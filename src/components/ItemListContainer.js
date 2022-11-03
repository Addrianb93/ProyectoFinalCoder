import React from 'react';
import { useEffect , useState} from 'react';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import { getVehiculos , getVehiculosOrd } from './utils';
import { useParams } from 'react-router-dom';

function ItemListContainer() {

  const [items,setItem] = useState([]);
  const { id } = useParams();

  useEffect(()=>{

    if(id) {
      getVehiculosOrd( id )
      .then((respuesta)=>{
        setItem(respuesta);
      })
      .catch((error)=>{
        setItem(error);
      })
    }else{
      getVehiculos()
      .then((respuesta)=>{
        setItem(respuesta);
      })
      .catch((error)=>{
        setItem(error);
      })
    }
}, [ id ]);

  return (
    <Container>
     { items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={ items } /> }
    </Container>
  );
}

export default ItemListContainer;