import React, { useContext, useEffect } from 'react';
import Form from '../itemTodo/From';
import List from '../itemTodo/List';
import Store from '../utils/StoreProvider';
const HOST_API ="http://localhost:8080/api";


export default () => {
    const { state: { todoList }, dispatch } = useContext(Store);
    const currentList = todoList.list;

    useEffect(() => {
        fetch(HOST_API + "/todoList")
        .then((response) => response.json())
        .then((list) => {
            dispatch({ type: "update-list-group", list });
        });
    }, [dispatch]);
    
    const onDelete = (todoListId) => {
        fetch(HOST_API + "/todoList/" + todoListId, {
            method: "DELETE",
          }).then((list) => {
            dispatch({ type: "delete-group", todoListId });
          });
    }

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
                        {<Form todoListId={todoList.id } />}
                        {<List todoListId={todoList.id } />}
                        </fieldset>
                    </div>
                );
            })}
        </div>
    )
}