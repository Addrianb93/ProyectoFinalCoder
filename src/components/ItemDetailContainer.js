import React from 'react';
import { useEffect , useState} from 'react';
import Container from 'react-bootstrap/Container';
import ItemDetail from './ItemDetail';
import { getDetailVehiculo } from './utils';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

  const [detail,setDetail] = useState([]);
  const { nombre } = useParams();

  useEffect(()=>{

      getDetailVehiculo(nombre)
      .then((respuesta)=>{
        setDetail(respuesta);
      })
      .catch((error)=>{
        setDetail(error);
      })
}, [ nombre ]);

  return (
    <Container>
     { detail.length === 0 ? <h1>Cargando...</h1> : <ItemDetail detail={ detail } /> }
    </Container>
  );
}

export default ItemDetailContainer;