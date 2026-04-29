package com.shreeji.backend.exception;

import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public String handleError(RuntimeException ex) {
        return ex.getMessage();
    }
}