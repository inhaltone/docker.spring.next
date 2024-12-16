package com.gendy.dockspring.errorHandlers;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ErrorResponse {
    private String message;
    private int status;

    public ErrorResponse(int status, String message) {
        this.message = message;
        this.status = status;
    }
}
