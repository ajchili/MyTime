package com.kirinpatel.mytime.util;

import java.util.ArrayList;

public class TaskContainer {

    private ArrayList<Task> tasks = new ArrayList<>();

    public TaskContainer() {

    }

    public TaskContainer(ArrayList<Task> tasks) {
        this.tasks = tasks;
    }

    public void addTask(Task task) {
        tasks.add(task);
    }

    public ArrayList<Task> getTasks() {
        return tasks;
    }
}
