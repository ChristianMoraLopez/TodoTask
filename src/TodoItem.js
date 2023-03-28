import React from "react";
import "./index.css";

function TodoItem(props) {
    const completetask = () => {
        console.log(
            "Completaste " + props.text);
    };

    const onDelete = () => {
        console.log(
            "Borraste " + props.text);
    };



    return (
        <li className="TodoItem p-8 hover:scale-110 hover:shadow-lg border border-ocean border-opacity-20 mb-4 max-w-sm mx-auto text-left rounded-xl shadow-2xl space-x-6 flex items-center">
          {props.completed ? (
            <div className="border border-2 rounded-full hover:bg-gray hover:bg-opacity-50">
            <span className="Icon Icon-check Icon-Circle-Check">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
          
            </span>

            </div>
          ) : (
            <span className="Icon Icon-active ">
            <div className="border-2 rounded-full hover:bg-gray hover:bg-opacity-50"
            
            onClick={completetask}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="" />
                </svg>
            </div>
              
            </span>
          )}


          <p className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete-active' : ''} font-bold flex-grow ml-4 `} >{props.text}</p>
          <span className="Icon Icon-delete hover:text-orange"
          onClick={onDelete}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </li>
      );
    }

export { TodoItem };