package com.tft_project.identity_project.services;

import com.tft_project.identity_project.dto.request.UserRequest;
import com.tft_project.identity_project.dto.response.UserResponse;

public interface UserService {
    UserResponse createUser(UserRequest request);

    UserResponse updateUser(Integer id, UserRequest request);

    UserResponse getUser(Integer id);

    void deleteUser(Integer id);
}
