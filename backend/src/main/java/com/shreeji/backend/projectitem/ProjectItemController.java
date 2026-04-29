package com.shreeji.backend.projectitem;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projects")
public class ProjectItemController {

    private final ProjectItemRepository repository;

    public ProjectItemController(ProjectItemRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<ProjectItem> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public ProjectItem create(@RequestBody ProjectItem item) {
        return repository.save(item);
    }

    @PutMapping("/{id}")
    public ProjectItem update(@PathVariable Long id, @RequestBody ProjectItem updated) {
        ProjectItem existing = repository.findById(id).orElseThrow();

        existing.setTitle(updated.getTitle());
        existing.setClientName(updated.getClientName());
        existing.setDescription(updated.getDescription());
        existing.setCategory(updated.getCategory());
        existing.setImageUrl(updated.getImageUrl());
        existing.setLocation(updated.getLocation());

        return repository.save(existing);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        repository.deleteById(id);
        return "Project deleted successfully";
    }
}