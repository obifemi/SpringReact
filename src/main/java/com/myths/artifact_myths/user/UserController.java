package com.myths.artifact_myths.user;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class UserController {

@Autowired 
UserService userService;
   
    @PostMapping("api/v1/user")
    void createUser(@RequestBody User user) {
        userService.createUser(user);
    }
    
}
