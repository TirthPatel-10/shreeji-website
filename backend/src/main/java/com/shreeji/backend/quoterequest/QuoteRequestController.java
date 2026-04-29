package com.shreeji.backend.quoterequest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quote-requests")
public class QuoteRequestController {

    private final QuoteRequestRepository repository;

    public QuoteRequestController(QuoteRequestRepository repository) {
        this.repository = repository;
    }

    // Public: customer submits request
    @PostMapping
    public QuoteRequest create(@RequestBody QuoteRequest request) {
        System.out.println("Received NEW Quote: " + request.getName());
        return repository.save(request);
    }

    // Admin: view all requests
    @GetMapping
    public List<QuoteRequest> getAll() {
        return repository.findAll();
    }

    // Admin: delete request
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        repository.deleteById(id);
        return "Quote request deleted";
    }
}