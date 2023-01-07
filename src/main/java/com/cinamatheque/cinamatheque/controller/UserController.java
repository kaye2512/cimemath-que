package com.cinamatheque.cinamatheque.controller;


import com.cinamatheque.cinamatheque.model.User;
import com.cinamatheque.cinamatheque.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/users")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping(path = "/save")
    public User newUser(@RequestBody User user){
        return  new User();
    }

    @GetMapping()
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }
}
