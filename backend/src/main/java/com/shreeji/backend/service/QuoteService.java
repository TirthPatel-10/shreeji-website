package com.shreeji.backend.service;

import com.shreeji.backend.Quote;
import com.shreeji.backend.QuoteRepository;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;

@Service
public class QuoteService {

    private final QuoteRepository repo;

    public QuoteService(QuoteRepository repo) {
        this.repo = repo;
    }

    public List<Quote> getAllQuotes() {
        return repo.findAll();
    }

    public Quote saveQuote(Quote quote) {
        return repo.save(quote);
    }

    public Quote getById(Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Quote not found"));
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public Quote updateQuote(Long id, Quote newQuote) {
        Quote existing = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Quote not found"));

        existing.setText(newQuote.getText());
        existing.setAuthor(newQuote.getAuthor());

        return repo.save(existing);
    }

    public List<Quote> searchByAuthor(String author) {
        return repo.findByAuthorContainingIgnoreCase(author);
    }

    public List<Quote> searchByText(String text) {
        return repo.findByTextContainingIgnoreCase(text);
    }

    public Page<Quote> getQuotesPaged(int page, int size) {
        return repo.findAll(PageRequest.of(page, size));
    }
}