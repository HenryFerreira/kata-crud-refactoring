function reducer(state, action) {
    switch (action.type) {
      // Todo List
      case "add-group":
        const groupUp = state.todoList.list;
        groupUp.push(action.item);
        return { ...state, todoList: { list: groupUp, item: {} } };
  
      case "delete-group":
        const groupUpDelete = state.todoList;
        const listGroupUpdate = groupUpDelete.list.filter((item) => {
          return item.todoListId !== action.id;
        });
        groupUpDelete.list = listGroupUpdate;
        return { ...state, todoList: groupUpDelete };
  
        case "update-list-group":
          const todoGroupUpList = state.todoList;
          todoGroupUpList.list = action.list;
          return { ...state, todoList: todoGroupUpList };
  
      // Todo
      case "update-item":
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
      case "delete-item":
        const todoUpDelete = state.todo;
        const listUpdate = todoUpDelete.list.filter((item) => {
          return item.id !== action.id;
        });
        todoUpDelete.list = listUpdate;
        return { ...state, todo: todoUpDelete };
      case "update-list":
        const todoUpList = state.todo;
        todoUpList.list = action.list;
        return { ...state, todo: todoUpList };
      case "edit-item":
        const todoUpEdit = state.todo;
        todoUpEdit.item = action.item;
        return { ...state, todo: todoUpEdit };
      case "add-item":
        const todoUp = state.todo.list;
        todoUp.push(action.item);
        return { ...state, todo: { list: todoUp, item: {} } };
      default:
        return state;
    }
  }
  
  export default reducer;







