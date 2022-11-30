import {createContext, useState} from 'react';
import { getVehiculos } from './components/utils';

export const contexto = createContext();
const { Provider } = contexto;
 
const ArchivoProvider = ({contenedor}) => {

    const [carrito, setCarrito] = useState( {getVehiculos} 
     );

    const [total, setTotal] = useState(0);

    const valorContexto = {
      carrito: carrito,
      cantidad: total,
      setCarrito:setCarrito,
      setTotal:setTotal,
    }

  return (
    <Provider value={ valorContexto }>
        {contenedor}
    </Provider>
  )
}

export default ArchivoProvider