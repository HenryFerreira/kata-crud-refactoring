package co.com.sofka.crud.services;

import co.com.sofka.crud.models.Todo;
import co.com.sofka.crud.models.TodoList;
import co.com.sofka.crud.repositories.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoListService {
    @Autowired
    private TodoListRepository todoListRepository;

    public Iterable<TodoList> getAllTodoList(){
        return todoListRepository.findAll();
    }

    public TodoList getTodoListById(Long id){
        return todoListRepository.findById(id).orElseThrow();
    }

    public TodoList setTodoList(TodoList element){
        return todoListRepository.save(element);
    }

    public void deleteTodoListById(Long id){
        todoListRepository.delete(getTodoListById(id));
    }

}
