package co.com.sofka.crud.controllers;

import co.com.sofka.crud.dtos.TodoDto;
import co.com.sofka.crud.models.Todo;
import co.com.sofka.crud.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    @Autowired
    private TodoService service;

    @GetMapping(value = "api/todos")
    public List<TodoDto> list(){
        return service.list();
    }

    @PostMapping("api/todo/{todoListId}")
    public TodoDto setTodoById(@PathVariable("todoListId") Long todoListId, @RequestBody TodoDto todoDto){
        return this.service.setTodoById(todoListId, todoDto);
    }

    @PutMapping("api/todo/search/{todoListId}")
    public TodoDto updateTodoByTodoListId(@PathVariable("todoListId") Long todoListId,@RequestBody TodoDto element){
        if(element.getId() != null){
            return service.updateTodoByTodoListId(todoListId, element);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping("api/todo/{todoListId}")
    public void deleteTodoById(@PathVariable("todoListId") Long todoListId){
        this.service.deleteTodoById(todoListId);
    }


}
