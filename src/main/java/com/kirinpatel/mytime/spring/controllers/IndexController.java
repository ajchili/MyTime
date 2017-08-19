package com.kirinpatel.mytime.spring.controllers;

import com.kirinpatel.mytime.util.TaskContainer;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

    @RequestMapping(path= "/")
    public String loadIndex(ModelMap map) {
        System.out.println("Loading index.jsp...");
        map.addAttribute("taskContainer", new TaskContainer());
        return "index";
    }
}
