import React from "react";
import "../index.css";

function TodoSearch({searchValue, setSearchValue}) {

  const onSearchValueChange= (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (

    <input 
    placeholder="Buscar" 
    className="  rounded-lg border border-purple text-center font-semibold"
    onChange = {onSearchValueChange}
    value= {searchValue}
    />
    
  );
}

export { TodoSearch };


/*Otra forma de de crear estados en React es trabajar con clases de la siguiente forma

class Componente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Aquí se inicializan los estados
      // Estado patito; se guarda un obejto con sus propiedades
      patito: "Hola soy un patito",
    };
  }
  render() {
    return (
      // Aquí se renderiza el componente, es deir esos objetos en THIS.STATE se pueden usar en el render
      //Aunque los onClicks en los divs no son buena idea usemos uno para ilustrar nuestro punto. 
      <div onClick= {() => this.state('Enrique')} 
      //En este caso, el estado patito no se renderizaría, sino que se ejecutaría la función setState, que recibe como parámetro un objeto con las propiedades que se quieren modificar.
      //Patito cambiaría a "Enrique"
      >{ this.state.patito }</div>
      //Por lo tanto, no se renderizaría el estado patito, sino el valor que tiene, que es "Hola soy un patito"
    );
  }
} */