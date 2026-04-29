package com.shreeji.backend.dto;

import jakarta.validation.constraints.NotBlank;

public class QuoteDTO {

    @NotBlank
    private String text;

    @NotBlank
    private String author;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}