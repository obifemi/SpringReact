package com.myths.artifact_myths.error;

import java.sql.Date;
import java.util.HashMap;
import java.util.Map;

public class ApiError {
    private int status;
    private String message;
    private String path;
    private long timestamp = new Date(System.currentTimeMillis()).getTime();
    private Map<String, String> errors = new HashMap<>();


    public Map<String, String> getErrors() {
        return errors;
    }

    public void setErrors(Map<String, String> errors) {
        this.errors = errors;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
