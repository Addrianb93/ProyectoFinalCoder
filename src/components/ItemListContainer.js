import React from 'react';
import Container from 'react-bootstrap/Container';

function ItemListContainer(props) {
  return (
    <Container>
        {props.Contenido}
    </Container>
  );
}

export default ItemListContainer;