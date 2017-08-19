package com.kirinpatel.mytime.util;

public class Task {

    private String title;
    private long currentTime = 0;
    private long totalTime = 0;
    private boolean isActive = false;

    public Task(String title) {
        this.title = title;
    }

    public void setCurrentTime(long currentTime) {
        this.currentTime = currentTime;
    }

    public void setTotalTime(long totalTime) {
        this.totalTime = totalTime;
    }

    public void setActive(boolean isActive) {
        this.isActive = isActive;
    }

    public String getTitle() {
        return title;
    }

    public long getCurrentTime() {
        return currentTime;
    }

    public long getTotalTime() {
        return totalTime;
    }

    public boolean isActive() {
        return isActive;
    }
}
