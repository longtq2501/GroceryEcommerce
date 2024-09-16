package com.tft_project.identity_project.service.impl;

import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import com.tft_project.identity_project.dto.request.AuthenticateRequest;
import com.tft_project.identity_project.dto.request.IntrospectRequest;
import com.tft_project.identity_project.dto.response.AuthenticateResponse;
import com.tft_project.identity_project.dto.response.IntrospectResponse;
import com.tft_project.identity_project.entity.User;
import com.tft_project.identity_project.enums.ErrorCode;
import com.tft_project.identity_project.exception.ApplicationException;
import com.tft_project.identity_project.repository.UserRepository;
import com.tft_project.identity_project.service.AuthenticateService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.StringJoiner;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticateServiceImpl implements AuthenticateService {
    UserRepository userRepository;
    PasswordEncoder passwordEncoder;

    @Value("${app.secretKey}")
    @NonFinal
    private String secretKey;


    @Override
    public AuthenticateResponse authenticate(AuthenticateRequest request) {
        var user = userRepository
                .findByUsername(request.getUsername())
                .orElseThrow(() -> new ApplicationException(ErrorCode.USER_NOT_FOUND));
        var authenticated = passwordEncoder.matches(request.getPassword(), user.getPassword());
        if(!authenticated) {
            throw new ApplicationException(ErrorCode.UNAUTHORIZED);
        } else {
            var token = generateToken(user);
            return AuthenticateResponse.builder()
                    .token(token)
                    .result(true)
                    .build();
        }
    }

    @Override
    public String generateToken(User user) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);

        JWTClaimsSet claimsSet = new JWTClaimsSet.Builder()
                .subject(user.getUsername())
                .issuer("identity-project")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(1, ChronoUnit.HOURS).toEpochMilli()
                ))
                .jwtID(UUID.randomUUID().toString())
                .claim("scope", buildScope(user))
                .build();

        Payload payload = new Payload(claimsSet.toJSONObject());

        JWSObject jwsObject = new JWSObject(header, payload);


            try {
                jwsObject.sign(new MACSigner(secretKey.getBytes()));
                return jwsObject.serialize();
            } catch (JOSEException e) {
                throw new ApplicationException(ErrorCode.UNABLE_CREATE_TOKEN);
            }
    }

    @Override
    public String buildScope(User user) {
        StringJoiner stringJoiner = new StringJoiner(" ");
        if(!CollectionUtils.isEmpty(user.getRoles())) {
            user.getRoles().forEach((role -> {
                stringJoiner.add("ROLE_" + role.getName());
                if(!CollectionUtils.isEmpty(role.getPermissions())) {
                    role.getPermissions().forEach(permission -> {
                        stringJoiner.add(permission.getName());
                    });
                }
            }));
        }
        return stringJoiner.toString();
    }

    @Override
    public SignedJWT verifyToken(String token) throws JOSEException, ParseException {
        JWSVerifier jwsVerifier = new MACVerifier(secretKey.getBytes());

        SignedJWT signedJWT = SignedJWT.parse(token);

        if(!signedJWT.verify(jwsVerifier)) {
            throw new ApplicationException(ErrorCode.INVALID_TOKEN);
        }

        Date expirationTime = signedJWT.getJWTClaimsSet().getExpirationTime();

        var verified = signedJWT.verify(jwsVerifier);

        if(!verified && expirationTime.after(new Date())) {
            throw new ApplicationException(ErrorCode.UNAUTHENTICATED);
        }

        return signedJWT;
    }

    @Override
    public IntrospectResponse introspect(IntrospectRequest request) throws ParseException, JOSEException {
        var token = request.getToken();
        boolean isValid = true;

        try {
            verifyToken(token);
        } catch (ApplicationException e) {
            isValid = false;
        }
        return IntrospectResponse.builder()
                .success(isValid)
                .build();
    }
}
