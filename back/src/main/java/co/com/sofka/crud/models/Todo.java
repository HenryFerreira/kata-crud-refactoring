package co.com.sofka.crud.models;

import javax.persistence.*;

@Entity
public class Todo {
    //-------------------------------------------------//
    //Atributos
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private boolean completed;

    @ManyToOne
    @JoinColumn(name = "todoListId", referencedColumnName = "todoListId")
    private TodoList todoList;
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

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public TodoList getTodoList() {
        return todoList;
    }

    public void setTodoList(TodoList todoList) {
        this.todoList = todoList;
    }
    //-------------------------------------------------//

}
