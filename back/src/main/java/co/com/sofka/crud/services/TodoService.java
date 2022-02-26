package co.com.sofka.crud.services;

import co.com.sofka.crud.dtos.TodoDto;
import co.com.sofka.crud.models.Todo;
import co.com.sofka.crud.models.TodoList;
import co.com.sofka.crud.repositories.TodoListRepository;
import co.com.sofka.crud.repositories.TodoRepository;
import co.com.sofka.crud.utils.generators;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;

    @Autowired
    private generators generator;

    @Autowired
    private TodoListRepository todoListRepository;

    public List<TodoDto> list(){
        List<Todo> todos = (List<Todo>) this.repository.findAll();
        return generator.generateTodosDto(todos);
    }

    public TodoDto setTodoById(Long todoListId, TodoDto todoDto){
        Todo todo = generator.generateTodo(todoDto);
        TodoList todoList = this.todoListRepository.findById(todoListId).orElseThrow();

        todo.setTodoList(todoList);

        todoDto = generator.generateTodoDto(this.repository.save(todo));
        return todoDto;
    }

    public TodoDto updateTodoByTodoListId (Long todoListId, TodoDto todoDto){
        Todo todo = generator.generateTodo(todoDto);
        TodoList todoList = this.todoListRepository.findById(todoListId).orElseThrow();
        todo.setTodoList(todoList);

        todoList.getTodoList().stream().forEach((element) -> {
            if(element.getId() == todo.getId()){
                element.setId(todo.getId());
                element.setName(todo.getName());
                element.setCompleted(todo.isCompleted());
            }
        });

        todo.setTodoList(todoList);

        this.todoListRepository.save(todoList);
        todoDto = generator.generateTodoDto(todo);

        return todoDto;
    }

    public void deleteTodoById(Long id){
        Todo todo = this.repository.findById(id).orElseThrow();
        this.repository.delete(todo);
    }

    public Todo save(Todo todo){
        return repository.save(todo);
    }

    public void delete(Long id){
        repository.delete(get(id));
    }

    public Todo get(Long id){
         return repository.findById(id).orElseThrow();
    }

}
