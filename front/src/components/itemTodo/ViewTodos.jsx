//---------------------------------------------------------------------//
//Importaciones
import React, { useContext, useEffect } from 'react';
import Store from '../utils/StoreProvider';
//---------------------------------------------------------------------//


export default (props) => {
  //----------------------------------------------------//
  //Constantes
  const { dispatch, state: { todo } } = useContext(Store);
  const currentList = todo.list.filter(todo => {
    return todo.todoList === props.todoListId;
  })
  const HOST_API ="http://localhost:8080/api";
  //----------------------------------------------------//


  //----------------------------------------------------//
  //Obtener los 'todos' desde la base de datos y ponerlos en pantalla
  useEffect(() => {
    fetch(HOST_API + "/todos")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-list", list });
      });
  }, [dispatch]);
  //----------------------------------------------------//

  //----------------------------------------------------//
  //Eliminar el 'todo' seleccionado de la 'todoList'
  const onDelete = (todoListId) => {
    fetch(HOST_API + "/todo/" + todoListId, {
      method: "DELETE",
    }).then((list) => {
      dispatch({ type: "delete-item", todoListId });
    });
  };
  //----------------------------------------------------//

  //----------------------------------------------------//
  //Editar el 'todo'seleccionado
  const onEdit = (todo) => {
    dispatch({ type: "edit-item", item: todo });
  };
  //----------------------------------------------------//

  //----------------------------------------------------//
  //Modifica la información del 'todo' seleccionado
  const onChange = (event, todo) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked,
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
      });
  };
  //----------------------------------------------------//

  //----------------------------------------------------//
  //Linea que marca el 'todo' ya realizado
  const decorationDone = {
    textDecoration: 'line-through'
  };
  //----------------------------------------------------//


  //----------------------------------------------------//
  //Se devuelve el HTML de List
  return (
   <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tarea</th>
            <th>¿Completado?</th>
          </tr>
        </thead>
        <tbody>
          {currentList.map((todo) => {
            return (
              <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>
                  <input
                    type="checkbox"
                    defaultChecked={todo.completed}
                    onChange={(event) => onChange(event, todo)}
                  ></input>
                </td>
                <td>
                  <button onClick={() => onDelete(todo.id)}>Eliminar</button>
                </td>
                <td>
                  <button onClick={() => onEdit(todo)}>Editar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  //----------------------------------------------------//
}
