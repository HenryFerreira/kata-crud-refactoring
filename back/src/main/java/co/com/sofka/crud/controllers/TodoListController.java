package co.com.sofka.crud.controllers;

import co.com.sofka.crud.models.TodoList;
import co.com.sofka.crud.services.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class TodoListController {
    @Autowired
    private TodoListService todoListService;

    @GetMapping("api/todoList")
    public Iterable<TodoList> getAllTodoList(){
        return todoListService.getAllTodoList();
    }

    @GetMapping("api/todoList/{id}")
    public TodoList getTodoListById(Long id){
        return todoListService.getTodoListById(id);
    }

    @PostMapping("api/todoList")
    public TodoList setTodoList(TodoList element){
        return todoListService.setTodoList(element);
    }

    @PutMapping("api/todo")
    public TodoList updateTodoList(@RequestBody TodoList element){
        if(element.getId() != null){
            return todoListService.setTodoList(element);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping("api/todoList/{id}")
    public void deleteTodoListById(Long id){
        todoListService.deleteTodoListById(id);
    }

}
