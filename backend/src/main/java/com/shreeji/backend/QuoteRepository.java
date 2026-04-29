package com.shreeji.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface QuoteRepository extends JpaRepository<Quote, Long> {

    List<Quote> findByAuthorContainingIgnoreCase(String author);

    List<Quote> findByTextContainingIgnoreCase(String text);
}