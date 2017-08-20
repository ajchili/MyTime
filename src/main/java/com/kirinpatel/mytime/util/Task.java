package com.kirinpatel.mytime.util;

public class Task {

    private String title;
    private String formattedCurrentTime = "0:00:00";
    private String formattedTotalTime = "0:00:00";
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
            formattedCurrentTime = formatTime(currentTime);
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
        formattedTotalTime = formatTime(this.totalTime);
    }

    public String getTitle() {
        return title;
    }

    public String getFormattedCurrentTime() {
        return formattedCurrentTime;
    }

    public String getFormattedTotalTime() {
        return formattedTotalTime;
    }

    private void setActive(boolean isActive) {
        this.isActive = isActive;
    }

    public void reset() {
        formattedCurrentTime = "0:00:0000";
        formattedTotalTime = "0:00:0000";
        currentTime = 0;
        startTime = -1;
        totalTime = 0;
        isActive = false;
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

    /**
     * Credit: https://github.com/caprica/vlcj-player/blob/master/src/main/java/uk/co/caprica/vlcjplayer/time/Time.java
     *
     * @param value Time
     * @return Time in displayable string format
     */
    private String formatTime(long value) {
        value /= 1000;
        int hours = (int) value / 3600;
        int remainder = (int) value - hours * 3600;
        int minutes = remainder / 60;
        remainder = remainder - minutes * 60;
        int seconds = remainder;
        return String.format("%d:%02d:%02d", hours, minutes, seconds);
    }
}
