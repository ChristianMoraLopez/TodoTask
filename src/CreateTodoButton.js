import React from "react";
import "./index.css";


function CreateTodoButton() {
    return (

        
        <div className="sticky bottom-0 z-10 p-4  flex ">
        
        <input placeholder="Agrega una nueva tarea" id= "agregarTarea"className=" rounded-lg border border-purple text-center font-semibold mr-4 pl-4 pr-4" />
        
        <button className="bg-Bluesky shadow-lg active:bg-bluebg hover:bg-ocean text-white font-bold py-2 px-4 border-b-4 border-bluebg hover:border-Graysky rounded-full"
        onClick= {() => {
            const input = document.getElementById("agregarTarea");
            const value = input.value;
            input.value = "";
            console.log(value);

        }}
        >+</button>
      </div>

    );
    }

export { CreateTodoButton };