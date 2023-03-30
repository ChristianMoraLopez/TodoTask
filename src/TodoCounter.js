import React from "react";
import "./index.css";




function TodoCounter({total, completed} ) {
  return (
    <div className="text-center ">
  <h className="text-blueskydark text-opacity-0 bg-gradient-to-tr from-gray-dark to-blue bg-clip-text  text-4xl font-black">
    Tus Tareas
  </h>
  <p className=" font-semibold mt-4 ">
    Has completado { completed } de {total} tareas 
  </p>
</div>

  );
}

export { TodoCounter };


/*export default TodoCounter;

export function TodoCounter() {
    return (
      <h2>Has completado 2 Tareas</h2>
    );
  }

  function TodoCounter() {
    return (
      <h2>Has completado 2 Tareas</h2>
    );
  }
  
  export { TodoCounter as default };*/


  /*Esta es una forma de agregar estilos en React:

  const styles = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    margin: "0 0 1rem 0",
  };
  
  function TodoCounter() {
    return (
      <h2 style={styles}>Has completado 2 Tareas</h2>
    );
  }*/
  