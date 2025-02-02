//---------------------------------------------------------------------//
//Importaciones
import React, { useContext, useRef, useState } from 'react';
import Store from '../utils/StoreProvider';
//---------------------------------------------------------------------//

export default (props) => {
  //----------------------------------------------------//
  //Constantes
  const formRef = useRef(null);
  const { dispatch, state: { todo } } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);
  const HOST_API ="http://localhost:8080/api";
  //----------------------------------------------------//

  //----------------------------------------------------//
  //Crea un 'todo' y lo inserta en la base de datos
  const onAdd = (event) => {
    event.preventDefault();  
    const request = {
      name: state.name,
      id: null,
      completed: false
    };
    
    fetch(HOST_API + "/todo/" + props.todoListId, {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: "add-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  }
  //----------------------------------------------------//
  
  //----------------------------------------------------//
  //Modifica un 'todo' seleccionado
  const onEdit = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: item.id,
      isCompleted: item.isCompleted
    };

    fetch(HOST_API + "/todo/search/" + props.todoListId, {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  
  }
  //----------------------------------------------------//

  //----------------------------------------------------//
  //Se devuelve el HTML del 'FormTodo'
  return (
    <form ref={formRef}>
      <input
          type="text"
          name="name"
          placeholder="¿Qué piensas hacer hoy?"
          defaultValue={item.name}
          onChange={(event) => {
            setState({ ...state, name: event.target.value })
          }}  
      ></input>
      {item.id && <button onClick={onEdit}>Actualizar</button>}
      {!item.id && <button onClick={onAdd}>Crear</button>}
    </form>
  );
  //----------------------------------------------------//
}