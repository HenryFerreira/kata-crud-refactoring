package co.com.sofka.crud.dtos;



public class TodoDto {
    //-------------------------------------------------//
    //Atributos
    private Long id;
    private Long todoList;
    private String name;
    private boolean completed;
    //-------------------------------------------------//

    //-------------------------------------------------//
    //Constructores

    public TodoDto() {//Defecto
    }

    public TodoDto(Long id, Long todoList, String name, boolean completed) {
        this.id = id;
        this.todoList = todoList;
        this.name = name;
        this.completed = completed;
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

    public Long getTodoList() {
        return todoList;
    }

    public void setTodoList(Long todoList) {
        this.todoList = todoList;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
    //-------------------------------------------------//


}
