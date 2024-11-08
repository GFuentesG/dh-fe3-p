import { useState } from "react";
import "./App.css";
import Card from "./Card";
import carsData from "./carsData"; 

function App() {
  const [cars, setCars] = useState([]); 
  const [searchCriteria, setSearchCriteria] = useState({
    manufacturer: "",
    year: "",
  });
  const [searchPerformed, setSearchPerformed] = useState(false); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const { manufacturer, year } = searchCriteria;

    // Validación de la entrada
    if (!manufacturer.trim()) {
      alert("Debe ingresar un fabricante válido");
      setSearchCriteria({ manufacturer: "", year: "" })
      return;
    }

    if (isNaN(year) || year < 1900 || year > 2024) {
      alert("Debe ingresar un año válido entre 1900 y el año actual");
      setSearchCriteria({ manufacturer: "", year: "" })
      return;
    }


    const filteredCars = carsData.filter(
      (car) =>
        car.manufacturer.toLowerCase() === manufacturer.toLowerCase() &&
        car.year === parseInt(year)
    );

    setCars(filteredCars);
    setSearchPerformed(true); 
  };

  return (
    <div className="App">
      <h1>Elige una marca y año de automóvil</h1>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="manufacturer">Fabricante:</label>
          <input
            type="text"
            id="manufacturer"
            name="manufacturer"
            value={searchCriteria.manufacturer}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="year">Año:</label>
          <input
            type="text"
            id="year"
            name="year"
            value={searchCriteria.year}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Buscar</button>
      </form>

   
      {searchPerformed && cars.length === 0 && (
        <p>Por favor revisa que la informacion se a correcta</p>
      )}

      {cars.length > 0 && (
        <div>
          {cars.map((car) => (
            <Card
              key={car.id}
              manufacturer={car.manufacturer}
              model={car.model}
              year={car.year}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
