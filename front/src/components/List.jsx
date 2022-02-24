//---------------------------------------------------------------------//
//Importaciones
import React, { useContext, useEffect } from 'react';
import {Store} from './StoreProvider';
//---------------------------------------------------------------------//

//---------------------------------------------------------------------//
//Constantes
const HOST_API = "http://localhost:8080/api";
//---------------------------------------------------------------------//

//---------------------------------------------------------------------//
//FUNCIÓN 'List'
const List = () => {    
    //----------------------------------------------------//
    //Hooks
    const { dispatch, state: { todo } } = useContext(Store);
    const currentList = todo.list;
    //----------------------------------------------------//

    //----------------------------------------------------//
    useEffect(() => {
        //Conexón con la API
        fetch(HOST_API + "/todos")
        .then(response => response.json())
        .then((list) => {
          dispatch({ type: "update-list", list })
        })
    }, [dispatch]);
    //----------------------------------------------------//
  
    //----------------------------------------------------//
    //Función de eliminar
    const onDelete = (id) => {
      fetch(HOST_API + "/" + id + "/todo", {
        method: "DELETE"
      }).then((list) => {
        dispatch({ type: "delete-item", id })
      })
    };
    //----------------------------------------------------//
  
    //----------------------------------------------------//
    //Función de editar
    const onEdit = (todo) => {
      dispatch({ type: "edit-item", item: todo })
    };
    //----------------------------------------------------//
  
    //----------------------------------------------------//
    const onChange = (event, todo) => {
      const request = {
        name: todo.name,
        id: todo.id,
        completed: event.target.checked
      };
      //Conexión con la API
      fetch(HOST_API + "/todo", {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          dispatch({ type: "update-item", item: todo });
        });
    };
    //----------------------------------------------------//
  
    //----------------------------------------------------//
    const decorationDone = {
      textDecoration: 'line-through'
    };
    //----------------------------------------------------//

    
    //----------------------------------------------------//
    //Se devuelve el List
    return (
        <div>
        <table >
            <thead>
            <tr>
                <td>ID</td>
                <td>Tarea</td>
                <td>¿Completado?</td>
            </tr>
            </thead>
            <tbody>
            {currentList.map((todo) => {
                return <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td><input type="checkbox" defaultChecked={todo.completed} onChange={(event) => onChange(event, todo)}></input></td>
                <td><button onClick={() => onDelete(todo.id)}>Eliminar</button></td>
                <td><button onClick={() => onEdit(todo)}>Editar</button></td>
                </tr>
            })}
            </tbody>
        </table>
        </div>
    );
    //----------------------------------------------------//
}
export default List;
//---------------------------------------------------------------------//