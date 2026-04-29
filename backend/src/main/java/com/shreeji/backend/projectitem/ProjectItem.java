package com.shreeji.backend.projectitem;

import jakarta.persistence.*;

@Entity
@Table(name = "projects")
public class ProjectItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String clientName;
    private String description;
    private String category;
    private String imageUrl;
    private String location;

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getClientName() {
        return clientName;
    }

    public String getDescription() {
        return description;
    }

    public String getCategory() {
        return category;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getLocation() {
        return location;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}