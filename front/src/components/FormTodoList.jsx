//---------------------------------------------------------------------//
//Importaciones
import React, { useContext, useState, useRef } from 'react';
import {Store} from './StoreProvider';
//---------------------------------------------------------------------//

//---------------------------------------------------------------------//
//Constantes
const HOST_API = "http://localhost:8080/api";
//---------------------------------------------------------------------//

//---------------------------------------------------------------------//
//FUNCIÓN 'List'
const FormTodoList = () => {    
    //----------------------------------------------------//
    //Hooks
    const { dispatch, state: { todo } } = useContext(Store);
    const item = todo.item;
    const [state, setState] = useState(item);
    const formRef = useRef(null);
    //----------------------------------------------------//

    //----------------------------------------------------//
    //Función de añadir
    const onAdd = (event) => {
        event.preventDefault();
    
        const request = {
            name: state.name,
            id: null
        };
        
        //Conexión con la API
        fetch(HOST_API + "/todoList", {
          method: "POST",
          body: JSON.stringify(request),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then((todo) => {
            dispatch({ type: "add-item", item: todo });
            setState({ name: "" });
            formRef.current.reset();
          });
      }
    //----------------------------------------------------//
    
    //----------------------------------------------------//
    //Se devuelve el FormTodoList
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
            <button onClick={onAdd}>Crear</button>
            <hr/>
        </form>
    );
    //----------------------------------------------------//
}
export default FormTodoList;
//---------------------------------------------------------------------//