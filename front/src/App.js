//---------------------------------------------------------------------//
//Importaciones
import React from 'react';
import { StoreProvider } from './components/utils/StoreProvider';
import FormTodoList from './components/listTodo/FormTodoList';
import ViewTodoList from './components/listTodo/ViewTodoList';
//---------------------------------------------------------------------//

//---------------------------------------------------------------------//
//FUNCIÓN PRINCIPAL
function App() {
  return (
    <StoreProvider>
      <h3>ToDo</h3>
      <FormTodoList/>
      <ViewTodoList/>
    </StoreProvider>
  );
}
export default App;
//---------------------------------------------------------------------//
