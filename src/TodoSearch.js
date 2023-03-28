import React from "react";
import "./index.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");

  return (

    <input 
    placeholder="Buscar" 
    className="  rounded-lg border  border-purple text-center font-semibold"
    onChange={(event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
    }}
    value={searchValue}
    />
  );
}

export { TodoSearch };