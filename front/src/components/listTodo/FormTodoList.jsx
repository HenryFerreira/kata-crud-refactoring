//---------------------------------------------------------------------//
//Importaciones
import React, { useContext, useState, useRef } from 'react';
import Store from '../utils/StoreProvider';
const HOST_API ="http://localhost:8080/api";
//---------------------------------------------------------------------//

export default () => {
  //----------------------------------------------------//
  //Constantes
  const formRef = useRef(null);
  const { dispatch, state: { todoList } } = useContext(Store);
  const item = todoList.item
  const [state, setState] = useState(item);
  //----------------------------------------------------//


  //----------------------------------------------------//
  //Crea el 'todoList' 
  const onCreate = (event) => {
    event.preventDefault();
    const request = {
        name: state.name,
        id: null
    };

    fetch(HOST_API + "/todoList", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((group) => {
        dispatch({ type: "add-group", item: group });
        setState({ name: "" });
        formRef.current.reset();
      })
  };
  //----------------------------------------------------//

  //----------------------------------------------------//
  //Se devuelve el HTML del 'FormTodoList'
  return (
    <form ref={formRef}>
        <hr/>
        <input 
            type="text" 
            name='name'
            placeholder='Lista de TO-DO'
            defaultValue={item.name}
            onChange={(event) => {
                setState({ ...state, name: event.target.value })
            }} 
        ></input>
        {"  "}
        <button onClick={onCreate}>Crear</button>
        <hr/>
    </form>
  );
  //----------------------------------------------------//
};