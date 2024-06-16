package com.myths.artifact_myths.user;

import org.springframework.web.bind.annotation.RestController;

import com.myths.artifact_myths.error.ApiError;
import com.myths.artifact_myths.shared.GenericMessage;

import jakarta.validation.Valid;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("api/v1/user")
    GenericMessage createUser(@Valid @RequestBody User user) {

        userService.createUser(user);
        return new GenericMessage("User is created successfully");
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
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

    @ExceptionHandler(NotUniqueEmailException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    ApiError handleNotUniqueError(NotUniqueEmailException exception) {
        ApiError ApiError = new ApiError();
        ApiError.setMessage("Validation failed");
        ApiError.setStatus(400);
        Map<String, String> validationErrors = new HashMap<>();
        validationErrors.put("email", "Email already exists");
        ApiError.setErrors(validationErrors);
        return ApiError;
    }

}
