package com.kylefitch.heb.api.controllers;

import com.kylefitch.heb.api.entities.User;
import com.kylefitch.heb.api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/user/{username}")
    Integer getUserId(@PathVariable String username) {
        return 1;
    }
}
