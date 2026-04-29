package com.shreeji.backend.controller;

import com.shreeji.backend.Quote;
import com.shreeji.backend.service.QuoteService;
import org.springframework.web.bind.annotation.*;
import com.shreeji.backend.dto.QuoteDTO;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;

import java.util.List;

@RestController
@RequestMapping("/quotes")
public class QuoteController {

    private final QuoteService service;

    public QuoteController(QuoteService service) {
        this.service = service;
    }

    @GetMapping
    public List<Quote> getAllQuotes() {
        return service.getAllQuotes();
    }

    @PostMapping
    public Quote addQuote(@Valid @RequestBody QuoteDTO dto) {
        Quote quote = new Quote();
        quote.setText(dto.getText());
        quote.setAuthor(dto.getAuthor());
        return service.saveQuote(quote);
    }

    @GetMapping("/{id}")
    public Quote getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public Quote updateQuote(@PathVariable Long id, @RequestBody Quote quote) {
        return service.updateQuote(id, quote);
    }

    @GetMapping("/search/author")
    public List<Quote> searchByAuthor(@RequestParam String name) {
        return service.searchByAuthor(name);
    }

    @GetMapping("/search/text")
    public List<Quote> searchByText(@RequestParam String text) {
        return service.searchByText(text);
    }

    @GetMapping("/paged")
    public Page<Quote> getPagedQuotes(
            @RequestParam int page,
            @RequestParam int size) {
        return service.getQuotesPaged(page, size);
    }
}