function reducer(state, action) {
  //Switch que tiene los diversos casos de los 'todoList' y de 'todo'
    switch (action.type) {
      //Casos de 'todoList'
      case "add-todoList":{
        const todoListUp = state.todoList.list;
        todoListUp.push(action.item);
        return { ...state, todoList: { list: todoListUp, item: {} } };
      }
      case "delete-todoList":{
        const todoListUpDelete = state.todoList;
        const todoListUpdate = todoListUpDelete.list.filter((item) => {
          return item.id !== action.todoListId;
        });
        todoListUpDelete.list = todoListUpdate;
        return { ...state, todoList: todoListUpDelete };
      }
      case "update-todoList":{
        const todoListsUp = state.todoList;
        todoListsUp.list = action.list;
        return { ...state, todoList: todoListsUp };
      }
      //Casos de 'todo'
      case "update-item":{
        const todoUpItem = state.todo;
        const listUpdateEdit = todoUpItem.list.map((item) => {
          if (item.id === action.item.id) {
            return action.item;
          }
          return item;
        });
        todoUpItem.list = listUpdateEdit;
        todoUpItem.item = {};
        return { ...state, todo: todoUpItem };
      }
      case "delete-item":{
        const todoUpDelete = state.todo;
        const listUpdate = todoUpDelete.list.filter((item) => {
          console.log(action.todoListId)
          return item.id !== action.todoListId;
        });
        todoUpDelete.list = listUpdate;
        return { ...state, todo: todoUpDelete };
      }
      case "update-list":{
        const todoUpList = state.todo;
        todoUpList.list = action.list;
        return { ...state, todo: todoUpList };
      }
      case "edit-item":{
        const todoUpEdit = state.todo;
        todoUpEdit.item = action.item;
        return { ...state, todo: todoUpEdit };
      }
      case "add-item":{
        const todoUp = state.todo.list;
        todoUp.push(action.item);
        return { ...state, todo: { list: todoUp, item: {} } };
      }
      default:{
        return state;
      }
    }
  }
  
  export default reducer;







