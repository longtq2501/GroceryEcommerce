package com.tft_project.identity_project.service;

import com.nimbusds.jose.JOSEException;
import com.nimbusds.jwt.SignedJWT;
import com.tft_project.identity_project.dto.request.AuthenticateRequest;
import com.tft_project.identity_project.dto.request.IntrospectRequest;
import com.tft_project.identity_project.dto.response.AuthenticateResponse;
import com.tft_project.identity_project.dto.response.IntrospectResponse;
import com.tft_project.identity_project.entity.User;

import java.text.ParseException;

public interface AuthenticateService {
    AuthenticateResponse authenticate(AuthenticateRequest request);
    String generateToken(User user);
    String buildScope(User user);
    SignedJWT verifyToken(String token) throws JOSEException, ParseException;

    IntrospectResponse introspect(IntrospectRequest request) throws ParseException, JOSEException;
}
