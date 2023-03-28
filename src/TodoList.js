import React from "react";

function TodoList(props) {
    return (
       
       <section className="TodoList text-center ">    
            <ul>
            <li>{props.children}</li>
            </ul>
        </section>
 
    );
    }   

export { TodoList };