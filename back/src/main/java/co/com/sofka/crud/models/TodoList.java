package co.com.sofka.crud.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class TodoList {
    //-------------------------------------------------//
    //Atributos
    @Id
    @GeneratedValue
    private Long todoListId;
    private String name;

    @OneToMany(mappedBy = "todoList")
    @Cascade(CascadeType.DELETE)
    @JsonIgnoreProperties("todoList")
    private List<Todo> todoList;
    //-------------------------------------------------//

    //-------------------------------------------------//
    //Getters & Setters

    public Long getId() {
        return todoListId;
    }

    public void setId(Long id) {
        this.todoListId = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Todo> getTodoList() {
        return todoList;
    }

    public void setTodoList(List<Todo> todoList) {
        this.todoList = todoList;
    }

    //-------------------------------------------------//


}
