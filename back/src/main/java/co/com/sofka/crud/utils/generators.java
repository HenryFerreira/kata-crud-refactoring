package co.com.sofka.crud.utils;

import co.com.sofka.crud.dtos.TodoDto;
import co.com.sofka.crud.dtos.TodoListDto;
import co.com.sofka.crud.models.Todo;
import co.com.sofka.crud.models.TodoList;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class generators {
    //-----------------------------------------------------------------//
    //TodoList

    //Crea un todoListDto a traves de un todoList
    public TodoListDto generateTodoListDto(TodoList todoList){
        TodoListDto todoListDto = new TodoListDto();
        todoListDto.setId(todoList.getId());
        todoListDto.setName(todoList.getName());

        if(todoListDto.getTodoList() != null){
            todoListDto.setTodoList(generateTodosDto(todoList.getTodoList()));
        }
        return todoListDto;
    }

    //Genera una Lista de todoListDto a traves de una lista de todoList
    //Utilizando el metodo de 'generateTodoListDto' para generar los items de la lista
    public List<TodoListDto> generateTodoListsDto(List<TodoList> todoList){
        List<TodoListDto> todoListDto;
        todoListDto = todoList.stream().map(this::generateTodoListDto).collect(Collectors.toList());
        return todoListDto;
    }

    //Genera un todoList a traves de un todoListDto
    public TodoList generateTodoList (TodoListDto todoListDto){
        TodoList todoList = new TodoList();
        todoList.setId(todoListDto.getId());
        todoList.setName(todoListDto.getName());
        todoList.setTodoList(new ArrayList<>());

        return todoList;
    }
    //-----------------------------------------------------------------//


    //------------------------------------------------------------------//
    //To-do

    //Crea un todoDto a traves de un to-do
    public TodoDto generateTodoDto(Todo todo){
        TodoDto todoDto = new TodoDto();
        todoDto.setId(todo.getId());
        todoDto.setCompleted(todo.isCompleted());
        todoDto.setName(todo.getName());

        if(todo.getTodoList() != null){
            todoDto.setTodoList(todo.getTodoList().getId());
        }

        return todoDto;
    }

    //Genera una Lista de todoDto a traves de una lista de to-do
    //Utilizando el metodo de 'generateTodoDto' para generar los items de la lista
    public List<TodoDto> generateTodosDto(List<Todo> todos){
        List<TodoDto> todoDtos = todos.stream().map(this::generateTodoDto).collect(Collectors.toList());
        return todoDtos;
    }

    //Genera un to-do a traves de un todoDto
    public Todo generateTodo (TodoDto todoDto){
        Todo todo = new Todo();
        todo.setId(todoDto.getId());
        todo.setName(todoDto.getName());
        todo.setCompleted(todoDto.isCompleted());

        return todo;
    }
    //------------------------------------------------------------------//

}
