let vehiculos = [
    {categoria:'ford', nombre: "Focus", id:'1', descripcion:'Diesel, modelo 2001, turbo' }, 
    {categoria:'ford', nombre: "Ranger", id:'2', descripcion:'nafta, modelo 2001, turbo'}, 
    {categoria:'peugeot', nombre: "208", id:'3', descripcion:'Diesel, modelo 2001, turbo'}, 
    {categoria:'peugeot', nombre: "307", id:'4', descripcion:'Nafta, modelo 2011, turbo'}, 
    {categoria:'chevrolet', nombre: "Astra", id:'5', descripcion:'GNC, modelo 2001, turbo'}
  ];

export const getVehiculosOrd = ( id ) => {

      let pedidoVehiculos = new Promise( (res) => {
        const carFiltrados = vehiculos.filter( ( vehiculo ) => vehiculo.categoria === id  );
        setTimeout(() => {
            res(carFiltrados);
        }, 2000)
      } );

      return pedidoVehiculos;
}

export const getVehiculos = () => {

    let pedidoVehiculos = new Promise( (res) => {
      setTimeout(() => {
          res(vehiculos);
      }, 2000)
    } );

    return pedidoVehiculos;
}

export const getDetailVehiculo = ( nombre ) => {

    let pedidoDetailVehiculos = new Promise( (res) => {
      const carFiltrados = vehiculos.filter( ( vehiculo ) => vehiculo.nombre === nombre  );
      setTimeout(() => {
          res(carFiltrados);
      }, 2000)
    } );

    return pedidoDetailVehiculos;
}