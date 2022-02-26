//---------------------------------------------------------------------//
//Importaciones
import React, { useReducer, createContext } from 'react';
import reducer from './Reducer';
//---------------------------------------------------------------------//


//---------------------------------------------------------------------//
//Constantes
const initialState = {
    todoList: {
        list: [],
        item: {}
    },
    todo: {
        list: [],
        item: {}
    }
};
const Store = createContext(initialState);
//---------------------------------------------------------------------//

//---------------------------------------------------------------------//
//FUNCIÓN 'StoreProvider'
export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <Store.Provider value={{ state, dispatch }}>
            {children}
        </Store.Provider>
    )
}

//Exportaciones
export default Store;
//---------------------------------------------------------------------//
