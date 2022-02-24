//---------------------------------------------------------------------//
//Importaciones
import React from 'react';
import Form from './components/From';
import List from './components/List';
import StoreProvider from './components/StoreProvider';
import FormTodoList from './components/FormTodoList';
//---------------------------------------------------------------------//
//Constantes
const HOST_API = "http://localhost:8080/api";
//---------------------------------------------------------------------//

//---------------------------------------------------------------------//
//FUNCIÓN PRINCIPAL
function App() {
  return (
    <StoreProvider>
      <h3>To-Do List</h3>
      <Form />
      <FormTodoList />
      <List />
    </StoreProvider>
  );
}
export default App;
//---------------------------------------------------------------------//
