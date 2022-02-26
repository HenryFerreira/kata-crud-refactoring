package co.com.sofka.crud.dtos;


import java.util.ArrayList;
import java.util.List;

public class TodoListDto {
    //-------------------------------------------------//
    //Atributos
    private Long id;
    private String name;
    private List<TodoDto> todoList = new ArrayList<>();
    //-------------------------------------------------//

    //-------------------------------------------------//
    //Constructores
    public TodoListDto() {
    }

    public TodoListDto(Long id, String name, List<TodoDto> todoList) {
        this.id = id;
        this.name = name;
        this.todoList = todoList;
    }
    //-------------------------------------------------//

    //-------------------------------------------------//
    //Getters & Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<TodoDto> getTodoList() {
        return todoList;
    }

    public void setTodoList(List<TodoDto> todoList) {
        this.todoList = todoList;
    }

    //-------------------------------------------------//


}
