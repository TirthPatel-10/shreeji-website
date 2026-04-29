package com.shreeji.backend.serviceitem;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/services")
public class ServiceItemController {

    private final ServiceItemRepository repository;

    public ServiceItemController(ServiceItemRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<ServiceItem> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public ServiceItem create(@RequestBody ServiceItem item) {
        return repository.save(item);
    }

    @PutMapping("/{id}")
    public ServiceItem update(@PathVariable Long id, @RequestBody ServiceItem updated) {
        ServiceItem existing = repository.findById(id).orElseThrow();

        existing.setTitle(updated.getTitle());
        existing.setDescription(updated.getDescription());
        existing.setCategory(updated.getCategory());

        return repository.save(existing);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        repository.deleteById(id);
        return "Deleted successfully";
    }
}