import React from 'react';
import Button from 'react-bootstrap/Button';

function CartWidget() {
  return (
    <Button variant="primary botonCarrito">
        <span class="material-symbols-outlined">
        shopping_cart
        </span>
    </Button>
  );
}

export default CartWidget;