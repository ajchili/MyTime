package com.kirinpatel.mytime.spring.controllers;

import com.kirinpatel.mytime.util.Task;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;

@Controller
public class IndexController {

    private static ArrayList<Task> tasks = new ArrayList<>();

    @RequestMapping(path= "/")
    public String loadIndex() {
        System.out.println("Loading index.jsp...");
        return "index";
    }

    @PostMapping("/?action")
    public String getPost(@ModelAttribute Task task) {
        System.out.println("Lasdawdasdawdasdawdasdawd...");
        return "index";
    }
}
