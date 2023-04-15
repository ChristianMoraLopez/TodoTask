import React from "react";

import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import "../index.css";

function AppUI ( {totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, completeTodo, unCompleteTodo, deleteTodo, addTodo})
{
    return (
        <React.Fragment>
        <div className=' min-h-full flex justify-center ' >
         <div className="container mx-auto p-6 sm:mx-16 mx-1.5 mt-16 mb-16  max-w-screen-2xl  justify-center bg-gradient-to-r from-bluebg to-skinbg rounded-xl shadow-lg space-x-6 space-y-4 flex-grow">
        
        <div className="mt-4 ">
       
          <TodoCounter
             total={totalTodos}
             completed={completedTodos}
       
          />
        </div>
        <div className='object-none  object-left-top  '>
       
        <div className=" justify-center   flex flex-col min-w-full ">
       
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
       
        </React.Fragment>);

}

export { AppUI};
