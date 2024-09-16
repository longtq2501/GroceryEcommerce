package com.tft_project.identity_project.exception;

import com.tft_project.identity_project.enums.ErrorCode;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ApplicationException  extends RuntimeException{
    private ErrorCode errorCode;
}
