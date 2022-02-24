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
    private String groupListId;

    @ManyToOne
    @JoinColumn(name = "list_to_id")
    private TodoList todoList;
    //-------------------------------------------------//

    //-------------------------------------------------//
    //Metodos
    public String getGroupListId() {
        return groupListId;
    }

    public void setGroupListId(String groupListId) {
        this.groupListId = groupListId;
    }

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
    //-------------------------------------------------//

}
