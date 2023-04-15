
import React from 'react';
import { AppUI } from './appUI';
import "../index.css";


//const url = 'https://drive.google.com/uc?export=view&id=13t4dDip-NhgJxn-bzPUBSKsOARI1lQZX';

// const defaultTodos = [
//   { text: 'Leer', completed: true },
//   { text: 'Escribir', completed: true },
//   { text: 'Correr', completed: false },



// ];

/*El array "todos" es un conjunto de tres objetos, cada uno de los cuales tiene dos propiedades: "text" y "completed".

La propiedad "text" representa el contenido de la tarea que se debe realizar y es un valor de tipo cadena (string).

La propiedad "completed" indica si la tarea ha sido completada o no, y es un valor booleano (true o false). Si el valor es true, la tarea se ha completado; si es false, la tarea está pendiente.*/

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  
  if (!localStorageTodos || localStorageTodos === "[]") {
    parsedTodos = [{ text: 'Hacer una lista', completed: false }];
    localStorage.setItem('TODOS_V1', JSON.stringify(parsedTodos));
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }



  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(parsedTodos);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;



  //Comparar serchValue con el texto de cada todo
  //Si el texto del todo incluye el searchValue, entonces ese todo debe ser mostrado
  //Si no incluye el searchValue, entonces ese todo no debe ser mostrado
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }


  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };


  const completeTodo = (text) => {
    const newTodos = todos.map(todo => {
      if (todo.text === text) {
        return {
          ...todo,
          completed: true
        };
      } else {
        return todo;
      }
    });
    saveTodos(newTodos);
  };

  
  const unCompleteTodo = (text) => {
    const newTodos = todos.map(todo => {
      if (todo.text === text) {
        return {
          ...todo,
          completed: false
        };
      } else {
        return todo;
      }
    });
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
  };
  


  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false
    });
    saveTodos(newTodos);
  };

  

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      unCompleteTodo={unCompleteTodo}
      deleteTodo={deleteTodo}
      addTodo={addTodo}
      
    />
  );
}

export default App;


/*Este código está generando una lista de elementos TodoItem a partir del array de objetos "todos" usando el método map().

El método map() itera sobre cada objeto del array "todos" y devuelve un nuevo array con la misma cantidad de elementos, en este caso, objetos TodoItem. Para cada objeto en "todos", se crea un elemento TodoItem con las propiedades "text" y "completed" establecidas en base a las propiedades del objeto actual en "todos".

Dentro de un componente TodoList, se está haciendo uso de las llaves (curly braces) para interpolar JavaScript dentro del JSX y así generar un conjunto de componentes TodoItem.

En resumen, se está recorriendo el array "todos" usando map() para generar una lista de componentes TodoItem.*/