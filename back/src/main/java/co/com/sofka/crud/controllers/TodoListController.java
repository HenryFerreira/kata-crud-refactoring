package co.com.sofka.crud.controllers;

import co.com.sofka.crud.dtos.TodoDto;
import co.com.sofka.crud.dtos.TodoListDto;
import co.com.sofka.crud.models.TodoList;
import co.com.sofka.crud.services.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoListController {
    @Autowired
    private TodoListService todoListService;

    @GetMapping("api/todoList")
    public List<TodoListDto> getAllTodoList(){
        return todoListService.getAllTodoList();
    }

    @GetMapping("api/todoList/{todoListId}")
    public TodoListDto getTodoListById(@PathVariable("todoListId") Long todoListId){
        return todoListService.getTodoListById(todoListId);
    }

    @PostMapping("api/todoList")
    public TodoListDto setTodoList(@RequestBody TodoListDto element){
        return todoListService.setTodoList(element);
    }

    @DeleteMapping("api/todoList/{todoListId}")
    public void deleteTodoListById(@PathVariable("todoListId") Long todoListId){
        this.todoListService.deleteTodoListById(todoListId);
    }

    @PostMapping("api/todo/{todoListId}")
    public TodoDto setTodoById(@PathVariable("todoListId") Long todoListId, @RequestBody TodoDto todoDto){
        return this.todoListService.setTodoById(todoListId, todoDto);
    }

    @PutMapping("api/todo/search/{todoListId}")
    public TodoDto updateTodoByTodoListId(@PathVariable("todoListId") Long todoListId,@RequestBody TodoDto element){
        if(element.getId() != null){
            return todoListService.updateTodoByTodoListId(todoListId, element);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping("api/todo/{todoListId}")
    public void deleteTodoById(@PathVariable("todoListId") Long todoListId){
        this.todoListService.deleteTodoById(todoListId);
    }

}
