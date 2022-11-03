import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ItemCount from './ItemCount';

function ItemDetail({detail}) {
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
                        <ItemCount/>
                      </Card.Body>
                    </Card>
                  </Col>
                  
    )
    })
            

  );
}

export default ItemDetail;