//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({manufacturer, model, year}) {
  return (
    <div className="card">
      <h3>Vehiculo seleccionado: </h3>
      <p>Fabricante: {manufacturer}</p>
      <p>Modelo: {model}</p>
      <p>Año: {year}</p>
    </div>
  );
}

export default Card;
