package com.tft_project.identity_project.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
@Getter
public enum ErrorCode {

    USER_NOT_FOUND(1000, "User not found", HttpStatus.NOT_FOUND),
    USER_ALREADY_EXISTS(1001, "User already exists", HttpStatus.CONFLICT),
    UNCATEGORIZED(1002, "Uncategorized", HttpStatus.INTERNAL_SERVER_ERROR),
    ;
    int code;
    String message;
    HttpStatusCode httpStatusCode;

}
