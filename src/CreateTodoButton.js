import React from "react";
import "./index.css";


function CreateTodoButton(props) {

    const onClickButton = (event) => {
        const input = document.getElementById("agregarTarea");
        const value = input.value;
        input.value = "";
        props.onCreate(value);
    }


    return (

        
        <div className="sticky bottom-0 z-10 p-4 flex justify-end "
       
        onKeyDown={(event) => {
            if (event.key === "Enter") {
                onClickButton();
            }
        }}
       >
        
        <input  type="text" placeholder="Agrega una nueva tarea" id= "agregarTarea" className=" w-80  rounded-lg border border-purple text-center font-semibold mr-4 pl-4 pr-4 " 
            autocomplete="off" 
        />
        
        <button className="bg-Bluesky shadow-lg active:bg-bluebg hover:bg-ocean text-white font-bold py-2 px-4 border-b-4 border-bluebg hover:border-Graysky rounded-full "
        onClick= {onClickButton}
        
        >+</button>
      </div>

    );
    }

export { CreateTodoButton };