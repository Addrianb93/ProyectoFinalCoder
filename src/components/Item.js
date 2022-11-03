import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Item({item}) {
  return (
            <Col md={3} key={item.id}>
              <Card className='itemVehiculos' >
                <Card.Body>
                  <Card.Title>{item.nombre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{item.categoria}</Card.Subtitle>
                  <Link className='botonVehiculos' variant="primary botonCarrito" to={"/item/"+item.nombre} >Ver Detalles</Link>
                </Card.Body>
              </Card>
            </Col>
  );
}

export default Item;