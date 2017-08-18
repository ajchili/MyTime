package com.kirinpatel.mytime.util;

public class Task {

    private final String TITLE;
    private long currentTime = 0;
    private long totalTime = 0;
    private boolean isActive = false;

    public Task(String title) {
        this.TITLE = title;
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
        return TITLE;
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
