import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function ItemCount({handleOnAdd}, {stock}) {

    useState();
    
    const estado = useState(0);
    let contador = estado[0];
    const funcionSumaResta = estado[1];

    let Sumar = () => {
        funcionSumaResta(contador + 1);
    }
    let Resta = () => {
        funcionSumaResta(contador - 1);
    }
    let Confirmar = () => {
        handleOnAdd(contador);
    }
  return (
    <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group">
            <Button onClick={Resta}>-</Button> <spam className="btn btn-primary">{contador} </spam><Button onClick={Sumar}>+</Button>
        </ButtonGroup>
        <ButtonGroup className="me-2" aria-label="First group">
            <Button onClick={Confirmar}>Confirmar</Button> 
        </ButtonGroup>
    </ButtonToolbar>
  );
}


export default ItemCount;