package com.kirinpatel.mytime.spring.controllers;

import com.kirinpatel.mytime.util.Task;
import com.kirinpatel.mytime.util.TaskContainer;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class IndexController {

    private TaskContainer taskContainer = new TaskContainer();

    @RequestMapping(path= "/")
    public String loadIndex(ModelMap map) {
        System.out.println("Loading index.jsp...");
        map.addAttribute("taskContainer", taskContainer);
        return updateTasksInList(map);
    }

    @RequestMapping(path= "/{title}", method= RequestMethod.GET)
    public String addTaskToList(@PathVariable("title") String title, ModelMap map) {
        System.out.println("Adding task...");
        taskContainer.addTask(new Task(title));
        map.addAttribute("taskContainer", taskContainer);
        return updateTasksInList(map);
    }

    @RequestMapping(path= "/remove_{index}", method= RequestMethod.GET)
    public String removeTaskFromList(@PathVariable("index") int index, ModelMap map) {
        if (index < taskContainer.getTasks().size() && index >= 0) {
            System.out.println("Removing task...");
            taskContainer.removeTask(index);
        }
        map.addAttribute("taskContainer", taskContainer);
        return updateTasksInList(map);
    }

    @RequestMapping(path= "/reset_{index}", method= RequestMethod.GET)
    public String resetTaskInList(@PathVariable("index") int index, ModelMap map) {
        if (index < taskContainer.getTasks().size() && index >= 0) {
            System.out.println("Resetting task...");
            taskContainer.getTasks().get(index).reset();
        }
        map.addAttribute("taskContainer", taskContainer);
        return updateTasksInList(map);
    }

    @RequestMapping(path= "/clear", method= RequestMethod.GET)
    public String clearTasksFromList(ModelMap map) {
        System.out.println("Clearing tasks...");
        taskContainer.getTasks().clear();
        map.addAttribute("taskContainer", taskContainer);
        return "index";
    }

    @RequestMapping(path= "/update", method= RequestMethod.GET)
    public String updateTasksInList(ModelMap map) {
        System.out.println("Updating tasks...");
        for (int i = 0; i < taskContainer.getTasks().size(); i++)  {
            taskContainer.getTasks().get(i).setCurrentTime();
        }
        map.addAttribute("taskContainer", taskContainer);
        return "index";
    }

    @RequestMapping(path= "/start_{index}", method= RequestMethod.GET)
    public String startTaskInList(@PathVariable("index") int index, ModelMap map) {
        if (index < taskContainer.getTasks().size() && index >= 0) {
            System.out.println("Starting timer for task...");
            taskContainer.getTasks().get(index).startTimer();
        }
        map.addAttribute("taskContainer", taskContainer);
        return updateTasksInList(map);
    }

    @RequestMapping(path= "/stop_{index}", method= RequestMethod.GET)
    public String stopTaskInList(@PathVariable("index") int index, ModelMap map) {
        if (index < taskContainer.getTasks().size() && index >= 0) {
            System.out.println("Stopping timer for task...");
            taskContainer.getTasks().get(index).stopTimer();
            taskContainer.getTasks().get(index).setTotalTime(taskContainer.getTasks().get(index).getCurrentTime() + taskContainer.getTasks().get(index).getTotalTime());
        }
        map.addAttribute("taskContainer", taskContainer);
        return updateTasksInList(map);
    }
}
