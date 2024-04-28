package com.myths.artifact_myths.user;

import org.springframework.web.bind.annotation.RestController;

import com.myths.artifact_myths.shared.GenericMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class UserController {

@Autowired 
UserService userService;
   
    @PostMapping("api/v1/user")
     GenericMessage createUser(@RequestBody User user) {
        userService.createUser(user);
        return new GenericMessage("User is created successfully");
    }
    
}
