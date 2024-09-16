package com.tft_project.identity_project.service;

import com.tft_project.identity_project.dto.request.UserCreateRequest;
import com.tft_project.identity_project.dto.request.UserUpdateRequest;
import com.tft_project.identity_project.dto.response.UserResponse;

import java.util.List;

public interface UserService {
    UserResponse createUser (UserCreateRequest request);
    List<UserResponse> getAllUsers();
    UserResponse upadateUser(String id,UserUpdateRequest request);
    UserResponse getUserById(String id);
}
