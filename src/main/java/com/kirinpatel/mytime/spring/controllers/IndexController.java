package com.kirinpatel.mytime.spring.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class IndexController {

    @RequestMapping(path= "/", method= RequestMethod.GET)
    public String test(ModelMap model) {
        return "index";
    }
}
