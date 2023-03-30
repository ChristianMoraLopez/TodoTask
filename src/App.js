
import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "./index.css";
//import './App.css';

//const url = 'https://drive.google.com/uc?export=view&id=13t4dDip-NhgJxn-bzPUBSKsOARI1lQZX';

const defaultTodos = [
  { text: 'Leer', completed: true },
  { text: 'Escribir', completed: true },
  { text: 'Correr', completed: false },



];

/*El array "todos" es un conjunto de tres objetos, cada uno de los cuales tiene dos propiedades: "text" y "completed".

La propiedad "text" representa el contenido de la tarea que se debe realizar y es un valor de tipo cadena (string).

La propiedad "completed" indica si la tarea ha sido completada o no, y es un valor booleano (true o false). Si el valor es true, la tarea se ha completado; si es false, la tarea está pendiente.*/

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);
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
    setTodos(newTodos);
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
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    setTodos(newTodos);
  };
  


  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false
    });
    setTodos(newTodos);
  };

  

  return (
 <React.Fragment>
 <div className=' min-h-full w-screen flex'>
  <div className="container mx-auto p-6 mt-16 mb-16 max-w-screen-2xl  justify-center bg-gradient-to-r from-bluebg to-skinbg rounded-xl shadow-lg space-x-6 space-y-4 flex-grow">
 
 <div className="mt-4  ">

   <TodoCounter
      total={totalTodos}
      completed={completedTodos}

   />
 </div>
 <div className='object-none  object-left-top '>

 <div className=" justify-center  flex flex-col">

    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      
    />
  </div>

 </div>
 


 <TodoList>
  <TransitionGroup>
    { 
      searchedTodos.map(todo => (
        <CSSTransition
          key={todo.text}
          timeout={300}
          classNames="todo"
        >
          <TodoItem
             text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onUnComplete={() => unCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
           
          />  
        </CSSTransition>
      ))
    }
  </TransitionGroup>
</TodoList>
      
   

            <CreateTodoButton
              onCreate={addTodo}
            />
      

        
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