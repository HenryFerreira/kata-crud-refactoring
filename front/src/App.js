//---------------------------------------------------------------------//
//Importaciones
import React from 'react';
import Form from './components/From';
import List from './components/List';
import StoreProvider from './components/StoreProvider';

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
      <List />
    </StoreProvider>
  );
}
export default App;
//---------------------------------------------------------------------//
