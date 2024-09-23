package com.tft_project.identity_project.services.impl;

import com.tft_project.identity_project.dto.request.UserRequest;
import com.tft_project.identity_project.dto.response.UserResponse;
import com.tft_project.identity_project.enums.ErrorCode;
import com.tft_project.identity_project.exception.ApplicationException;
import com.tft_project.identity_project.mapper.UserMapper;
import com.tft_project.identity_project.repository.UserRepository;
import com.tft_project.identity_project.services.UserService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE, makeFinal = true)
public class UserServiceImpl implements UserService {
    UserRepository userRepository;
    UserMapper userMapper;

    @Override
    public UserResponse createUser(UserRequest request) {
        var user = userMapper.toUser(request);
        userRepository.save(user);
        return userMapper.toUserResponse(user);
    }

    @Override
    public UserResponse updateUser(Integer id, UserRequest request) {
        var user = userRepository.findById(id)
                .orElseThrow(() ->new ApplicationException(ErrorCode.USER_NOT_FOUND));
        var updatedUser = userMapper.toUpdateUser(user, request);
        userRepository.save(updatedUser);
        return userMapper.toUserResponse(updatedUser);
    }

    @Override
    public UserResponse getUser(Integer id) {
        var user = userRepository.findById(id).orElseThrow(() -> new ApplicationException(ErrorCode.USER_NOT_FOUND));
        return userMapper.toUserResponse(user);
    }

    @Override
    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
}
