
import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import "./index.css";
//import './App.css';

//const url = 'https://drive.google.com/uc?export=view&id=13t4dDip-NhgJxn-bzPUBSKsOARI1lQZX';

const todos = [
  { text: 'Leer', completed: true },
  { text: 'Escribir', completed: false },
  { text: 'Correr', completed: false },


];

/*El array "todos" es un conjunto de tres objetos, cada uno de los cuales tiene dos propiedades: "text" y "completed".

La propiedad "text" representa el contenido de la tarea que se debe realizar y es un valor de tipo cadena (string).

La propiedad "completed" indica si la tarea ha sido completada o no, y es un valor booleano (true o false). Si el valor es true, la tarea se ha completado; si es false, la tarea está pendiente.*/

function App() {
  return (
 <React.Fragment>
 <div className=' min-h-full w-screen flex'>
  <div className="p-6 mt-16 mb-16 min-w-lg max-w-max mx-auto justify-center bg-gradient-to-r from-bluebg to-skinbg rounded-xl shadow-lg space-x-6 space-y-4 flex-grow">
 <div className="mt-4 ">

   <TodoCounter/>
 </div>
 <div className="justify-center flex">

    <TodoSearch/>
  </div>


    <TodoList>
        { todos.map(todo => (
          <TodoItem 
          key={todo} 
          text={todo.text} 
          completed={todo.completed}/>))

        }
    </TodoList>
      
            <CreateTodoButton/>
        
  </div>


 </div>

 </React.Fragment>
  );
}

export default App;


/*Este código está generando una lista de elementos TodoItem a partir del array de objetos "todos" usando el método map().

El método map() itera sobre cada objeto del array "todos" y devuelve un nuevo array con la misma cantidad de elementos, en este caso, objetos TodoItem. Para cada objeto en "todos", se crea un elemento TodoItem con las propiedades "text" y "completed" establecidas en base a las propiedades del objeto actual en "todos".

Dentro de un componente TodoList, se está haciendo uso de las llaves (curly braces) para interpolar JavaScript dentro del JSX y así generar un conjunto de componentes TodoItem.

En resumen, se está recorriendo el array "todos" usando map() para generar una lista de componentes TodoItem.*/