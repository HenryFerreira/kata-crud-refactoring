//---------------------------------------------------------------------//
//Importaciones
import React from 'react';
import { StoreProvider } from './components/utils/StoreProvider';
import FormTodoList from './components/listTodo/FormTodoList';
import ListTodoView from './components/listTodo/ListTodoView';
//---------------------------------------------------------------------//

//---------------------------------------------------------------------//
//FUNCIÓN PRINCIPAL
function App() {
  return (
    <StoreProvider>
      <h3>ToDo</h3>
      <FormTodoList/>
      <ListTodoView/>
    </StoreProvider>
  );
}
export default App;
//---------------------------------------------------------------------//
