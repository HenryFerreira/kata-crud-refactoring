//--------------------------------------------------------------//
//Importaciones
import React, { useContext, useEffect } from 'react';
import FormTodo from '../itemTodo/FromTodo';
import ViewTodos from '../itemTodo/ViewTodos';
import Store from '../utils/StoreProvider';
//--------------------------------------------------------------//

export default () => {
    //--------------------------------------------------------//
    //Constantes
    const { state: { todoList }, dispatch } = useContext(Store);
    const currentList = todoList.list;
    const HOST_API ="http://localhost:8080/api";
    //--------------------------------------------------------//


    //--------------------------------------------------------//
    //Obtiene los 'todoList' de la base de datos
    useEffect(() => {
        fetch(HOST_API + "/todoList")
        .then((response) => response.json())
        .then((list) => {
            dispatch({ type: "update-list-group", list });
        });
    }, [dispatch]);
    //--------------------------------------------------------//
    
    //--------------------------------------------------------//
    //Elimina el 'todoList' seleccionado
    const onDelete = (todoListId) => {
        fetch(HOST_API + "/todoList/" + todoListId, {
            method: "DELETE",
          }).then((list) => {
            dispatch({ type: "delete-group", todoListId });
          });
    }
    //--------------------------------------------------------//

    //--------------------------------------------------------//
    //Devuelve el HTML del 'ViewTodoList'
    return (
        <div>
            {currentList.map((todoList) => {
                return (
                    <div key={todoList.id}>
                        <fieldset>
                            <legend>
                                <b>ToDo List: </b> {todoList.name.toUpperCase()}
                                <button onClick={() => onDelete(todoList.id)}>
                                Eliminar
                                </button>
                            </legend>
                        {<FormTodo todoListId={todoList.id } />}
                        {<ViewTodos todoListId={todoList.id } />}
                        </fieldset>
                    </div>
                );
            })}
        </div>
    )
    //--------------------------------------------------------//
}