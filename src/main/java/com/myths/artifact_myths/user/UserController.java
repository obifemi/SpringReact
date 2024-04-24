package com.myths.artifact_myths.user;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;



@RestController
public class UserController {

    @CrossOrigin
    @PostMapping("api/v1/user")
    void createUser() {
        System.out.println("User created");
    }
    
}
