package com.tlt.talklikethatapi.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


import com.tlt.talklikethatapi.model.User;
import com.tlt.talklikethatapi.model.UserRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Controller
@RequestMapping(path = "/user")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;
    
    @RequestMapping("/")
    public @ResponseBody
    Iterable<User> getUser() {
        return userRepository.findAll();
    }
    
    @RequestMapping("/id")
    public @ResponseBody
    User getUserById(@RequestParam int id) {
        return userRepository.findOne(id);
    }
   
    @RequestMapping("/name")
    public @ResponseBody
    Iterable<User> getUserByName(@RequestParam String name){
        return userRepository.findByName(name);
    }
}
