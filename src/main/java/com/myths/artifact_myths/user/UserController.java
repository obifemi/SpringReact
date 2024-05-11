package com.myths.artifact_myths.user;

import org.springframework.web.bind.annotation.RestController;

import com.myths.artifact_myths.error.ApiError;
import com.myths.artifact_myths.shared.GenericMessage;

import jakarta.validation.Valid;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("api/v1/user")
    ResponseEntity<?> createUser(@Valid @RequestBody User user) {
        if (user == null || user.getUsername() == null || user.getUsername().isEmpty()) {
            ApiError error = new ApiError();
            error.setMessage("Username is required");
            error.setStatus(400);

            Map<String, String> validationErrors = new HashMap<>();
            validationErrors.put("username", "Username is required");
            error.setErrors(validationErrors);
            return ResponseEntity.badRequest().body(error);

        }

        userService.createUser(user);
        return ResponseEntity.ok(new GenericMessage("User is created successfully"));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    ApiError handleValidationException(MethodArgumentNotValidException exception) {
        ApiError ApiError = new ApiError();
        ApiError.setMessage("Validation failed");
        ApiError.setStatus(400);
        Map<String, String> validationErrors = new HashMap<>();

        exception.getBindingResult().getFieldErrors().forEach(fieldError -> {
            validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
        });

        ApiError.setErrors(validationErrors);
        return ApiError;
    }

}
