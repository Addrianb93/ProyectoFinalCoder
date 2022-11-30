import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import { contexto } from '../ArchivoProvider';

function CartWidget() {

  const valorContexto = useContext( contexto );

  return (
    <Button variant="primary botonCarrito">
        <span class="material-symbols-outlined">
        shopping_cart
        </span>
        <span>{ valorContexto.cantidad }</span>
    </Button>
  );
}

export default CartWidget;