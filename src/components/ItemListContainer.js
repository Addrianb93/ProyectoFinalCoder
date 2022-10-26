import React from 'react';
import Container from 'react-bootstrap/Container';

function ItemListContainer({Greeting}) {
  return (
    <Container>
        {Greeting}
    </Container>
  );
}

export default ItemListContainer;