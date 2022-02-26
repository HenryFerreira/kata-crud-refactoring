package co.com.sofka.crud.services;

import co.com.sofka.crud.dtos.TodoDto;
import co.com.sofka.crud.models.Todo;
import co.com.sofka.crud.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;

    public List<TodoDto> list(){
        List<Todo> todos = (List<Todo>) this.repository.findAll();
        return generateTodosDto(todos);
    }

    public TodoDto generateTodoDto(Todo todo){
        TodoDto todoDto = new TodoDto();
        todoDto.setId(todo.getId());
        todoDto.setCompleted(todo.isCompleted());
        todoDto.setName(todo.getName());

        if(todo.getTodoList() != null){
            todoDto.setTodoList(todo.getTodoList().getId());
            System.out.println(todoDto.getTodoList());
        }

        return todoDto;
    }

    public List<TodoDto> generateTodosDto(List<Todo> todos){
        List<TodoDto> todoDtos = todos.stream().map(this::generateTodoDto).collect(Collectors.toList());
        return todoDtos;
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
