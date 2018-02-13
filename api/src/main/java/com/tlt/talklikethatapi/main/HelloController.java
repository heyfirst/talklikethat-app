package com.tlt.talklikethatapi.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tlt.talklikethatapi.model.HelloRepository;
import com.tlt.talklikethatapi.model.Hello;

@Controller
@RequestMapping(path = "/hello")
public class HelloController {

    @Autowired

    private HelloRepository helloRepository;

    @GetMapping(path = "/add") // Map ONLY GET Requests
    public @ResponseBody
    String addHello(@RequestParam String content) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        Hello n = new Hello();
        n.setContent(content);
        helloRepository.save(n);
        return "Saved";
    }

    @RequestMapping("/")
    public @ResponseBody
    Iterable<Hello> getHello() {
        return helloRepository.findAll();
    }

}
