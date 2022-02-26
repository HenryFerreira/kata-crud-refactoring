package co.com.sofka.crud.services;

import co.com.sofka.crud.dtos.TodoDto;
import co.com.sofka.crud.dtos.TodoListDto;
import co.com.sofka.crud.models.Todo;
import co.com.sofka.crud.models.TodoList;
import co.com.sofka.crud.repositories.TodoListRepository;
import co.com.sofka.crud.repositories.TodoRepository;
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

    public List<TodoListDto> getAllTodoList(){
        List<TodoList> todoList = (List<TodoList>) this.todoListRepository.findAll();
        return generateTodoListsDto(todoList);
    }

    //-----------------------------------------------------------------//
    public TodoListDto generateTodoListDto(TodoList todoList){
        TodoListDto todoListDto = new TodoListDto();
        todoListDto.setId(todoList.getId());
        todoListDto.setName(todoList.getName());

        if(todoListDto.getTodoList() != null){
            todoListDto.setTodoList(generateTodosDto(todoList.getTodoList()));
        }
        return todoListDto;
    }

    public List<TodoListDto> generateTodoListsDto(List<TodoList> todoList){
        List<TodoListDto> todoListDto;
        todoListDto = todoList.stream().map(this::generateTodoListDto).collect(Collectors.toList());
        return todoListDto;
    }

    public TodoList generateTodoList (TodoListDto todoListDto){
        TodoList todoList = new TodoList();
        todoList.setId(todoListDto.getId());
        todoList.setName(todoListDto.getName());
        todoList.setTodoList(new ArrayList<>());

        return todoList;
    }
    //-----------------------------------------------------------------//


    public TodoListDto getTodoListById(Long id){
        TodoList todoList = this.todoListRepository.findById(id).orElseThrow();
        return generateTodoListDto(todoList);
    }

    public TodoListDto setTodoList(TodoListDto todoListDto){
        TodoList todoList = generateTodoList(todoListDto);
        todoListDto = generateTodoListDto(this.todoListRepository.save(todoList));
        return todoListDto;
    }

    public void deleteTodoListById(Long id){
        TodoList todoList = this.todoListRepository.findById(id).orElseThrow();
        this.todoListRepository.delete(todoList);
    }

    //------------------------------------------------------------------//
    //To-do

    //------------------------------------------------------------------//
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

    public Todo generateTodo (TodoDto todoDto){
        Todo todo = new Todo();
        todo.setId(todoDto.getId());
        todo.setName(todoDto.getName());
        todo.setCompleted(todoDto.isCompleted());

        return todo;
    }

    //------------------------------------------------------------------//

    public TodoDto setTodoById(Long todoListId, TodoDto todoDto){
        Todo todo = generateTodo(todoDto);
        TodoList todoList = this.todoListRepository.findById(todoListId).orElseThrow();

        todo.setTodoList(todoList);

        todoDto = generateTodoDto(this.todoRepository.save(todo));
        return todoDto;
    }

    public TodoDto updateTodoByTodoListId (Long todoListId, TodoDto todoDto){
        Todo todo = generateTodo(todoDto);
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
        todoDto = generateTodoDto(todo);

        return todoDto;
    }

    public void deleteTodoById(Long id){
        Todo todo = this.todoRepository.findById(id).orElseThrow();
        this.todoRepository.delete(todo);
    }

}
