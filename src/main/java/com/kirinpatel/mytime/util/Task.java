package com.kirinpatel.mytime.util;

public class Task {

    private String title;
    private long currentTime = 0;
    private long startTime = -1;
    private long totalTime = 0;
    private boolean isActive = false;

    public Task(String title) {
        this.title = title;
    }

    public void setCurrentTime() {
        if (startTime > 0) {
            currentTime = System.currentTimeMillis() - startTime;
        }
    }

    public void startTimer() {
        if (!isActive) {
            setActive(true);
            startTime = System.currentTimeMillis();
        }
    }

    public void stopTimer() {
        if (isActive) {
            setActive(false);
            startTime = -1;
        }
    }

    public void setTotalTime(long totalTime) {
        this.totalTime = totalTime;
    }

    private void setActive(boolean isActive) {
        this.isActive = isActive;
    }

    public void reset() {
        currentTime = 0;
        startTime = -1;
        totalTime = 0;
        isActive = false;
    }

    public String getTitle() {
        return title;
    }

    public long getCurrentTime() {
        return currentTime;
    }

    public long getStartTime() {
        return startTime;
    }

    public long getTotalTime() {
        return totalTime;
    }

    public boolean isActive() {
        return isActive;
    }
}
