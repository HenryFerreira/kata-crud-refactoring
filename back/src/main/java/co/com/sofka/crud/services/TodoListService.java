package co.com.sofka.crud.services;

import co.com.sofka.crud.dtos.TodoDto;
import co.com.sofka.crud.dtos.TodoListDto;
import co.com.sofka.crud.models.Todo;
import co.com.sofka.crud.models.TodoList;
import co.com.sofka.crud.repositories.TodoListRepository;
import co.com.sofka.crud.repositories.TodoRepository;
import co.com.sofka.crud.utils.generators;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoListService {
    @Autowired
    private TodoListRepository todoListRepository;

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private generators generator;

    public List<TodoListDto> getAllTodoList(){
        List<TodoList> todoList = (List<TodoList>) this.todoListRepository.findAll();
        return generator.generateTodoListsDto(todoList);
    }

    public TodoListDto getTodoListById(Long id){
        TodoList todoList = this.todoListRepository.findById(id).orElseThrow();
        return generator.generateTodoListDto(todoList);
    }

    public TodoListDto setTodoList(TodoListDto todoListDto){
        TodoList todoList = generator.generateTodoList(todoListDto);
        todoListDto = generator.generateTodoListDto(this.todoListRepository.save(todoList));
        return todoListDto;
    }

    public void deleteTodoListById(Long id){
        TodoList todoList = this.todoListRepository.findById(id).orElseThrow();
        this.todoListRepository.delete(todoList);
    }

    //------------------------------------------------------------------//
    //To-do




}
