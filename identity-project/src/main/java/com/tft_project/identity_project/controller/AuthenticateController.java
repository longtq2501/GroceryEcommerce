package com.tft_project.identity_project.controller;

import com.nimbusds.jose.JOSEException;
import com.tft_project.identity_project.dto.request.ApiResponse;
import com.tft_project.identity_project.dto.request.AuthenticateRequest;
import com.tft_project.identity_project.dto.request.IntrospectRequest;
import com.tft_project.identity_project.dto.response.AuthenticateResponse;
import com.tft_project.identity_project.dto.response.IntrospectResponse;
import com.tft_project.identity_project.service.AuthenticateService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = lombok.AccessLevel.PRIVATE)
public class AuthenticateController {
    AuthenticateService authenticateService;

    @PostMapping("/login")
    public ApiResponse<AuthenticateResponse> authenticate(@RequestBody AuthenticateRequest request) {
        return ApiResponse.<AuthenticateResponse>builder()
                .result(authenticateService.authenticate(request))
                .build();
    }

    @PostMapping("/introspect")
    public ApiResponse<IntrospectResponse> introspect(@RequestBody IntrospectRequest request)
            throws ParseException, JOSEException {
        return ApiResponse.<IntrospectResponse>builder()
                .result(authenticateService.introspect(request))
                .build();
    }

}
