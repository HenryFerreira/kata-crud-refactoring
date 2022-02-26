//---------------------------------------------------------------------//
//Importaciones
import React, { useContext, useEffect } from 'react';
import Store from '../utils/StoreProvider';
const HOST_API ="http://localhost:8080/api";
//---------------------------------------------------------------------//


export default (props) => {
  //----------------------------------------------------//
  //Hooks
  const { dispatch, state: { todo } } = useContext(Store);
  const currentList = todo.list.filter(todo => {
    console.log(todo.name +" " +todo.todoList +"----"+props.todoListId)
    return todo.todoList === props.todoListId;
  })
  //----------------------------------------------------//


  //----------------------------------------------------//
  useEffect(() => {
    fetch(HOST_API + "/todos")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-list", list });
      });
  }, [dispatch]);
  //----------------------------------------------------//

  //----------------------------------------------------//
  //Función de eliminar
  const onDelete = (todoListId) => {
    fetch(HOST_API + "/todo/" + todoListId, {
      method: "DELETE",
    }).then((list) => {
      dispatch({ type: "delete-item", todoListId });
    });
  };
  //----------------------------------------------------//

  //----------------------------------------------------//
  //Función de editar
  const onEdit = (todo) => {
    dispatch({ type: "edit-item", item: todo });
  };
  //----------------------------------------------------//

  //----------------------------------------------------//
  const onChange = (event, todo) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked,
    };
    fetch(HOST_API + "/todo/" + props.todoListId, {
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
  const decorationDone = {
    textDecoration: 'line-through'
  };
  //----------------------------------------------------//


  //----------------------------------------------------//
  //Se devuelve el List
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
          {console.log(todo)}
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
