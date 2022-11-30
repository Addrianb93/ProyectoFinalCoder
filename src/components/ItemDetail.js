import React, {useContext} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ItemCount from './ItemCount';

import { contexto } from '../ArchivoProvider';


function ItemDetail({detail}) {

  const valorContexto = useContext( contexto );

  const handleOnAdd = (cantidad) => {
     valorContexto.setTotal(cantidad);
  }



  return (

    detail.map((details) =>{
      return (   
                  <Col md={12} key={details.id}>
                    <Card className='itemVehiculos' >
                      <Card.Body>
                        <Card.Title>{details.nombre}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{details.categoria}</Card.Subtitle>
                        <Card.Text>
                          {details.descripcion}
                        </Card.Text>
                        <ItemCount handleOnAdd={handleOnAdd} />
                        
                      </Card.Body>
                    </Card>
                  </Col>
                  
    )
    })
            

  );
}

export default ItemDetail;