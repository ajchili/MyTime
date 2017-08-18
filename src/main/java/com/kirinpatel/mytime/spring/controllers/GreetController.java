package com.kirinpatel.mytime.spring.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class GreetController {

    @RequestMapping(path= "/greet/{name}",method=RequestMethod.GET)
    public String greet(@PathVariable("name") String name, ModelMap model){
        String greet =" Hello " + name + ".\n How are You?";
        model.addAttribute("greet", greet);
        System.out.println(greet);

        return "greet";
    }
}
