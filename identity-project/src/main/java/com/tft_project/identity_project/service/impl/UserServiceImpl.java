package com.tft_project.identity_project.service.impl;

import com.tft_project.identity_project.dto.request.UserCreateRequest;
import com.tft_project.identity_project.dto.request.UserUpdateRequest;
import com.tft_project.identity_project.dto.response.UserResponse;
import com.tft_project.identity_project.entity.Role;
import com.tft_project.identity_project.enums.ErrorCode;
import com.tft_project.identity_project.exception.ApplicationException;
import com.tft_project.identity_project.mapper.UserMapper;
import com.tft_project.identity_project.repository.RoleRepository;
import com.tft_project.identity_project.repository.UserRepository;
import com.tft_project.identity_project.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class UserServiceImpl implements UserService {
    UserRepository userRepository;
    UserMapper userMapper;
    PasswordEncoder passwordEncoder;
    RoleRepository roleRepository;

    @Override
    public UserResponse createUser(UserCreateRequest request) {
        var user = userMapper.toUser(request);
        var password = passwordEncoder.encode(user.getPassword());
        user.setPassword(password);

        HashSet<Role> roles = new HashSet<>();
        roles.add(roleRepository.findByName("USER"));
        user.setRoles(roles);

        return userMapper.toUserResponse(userRepository.save(user));
    }

    @Override
    public List<UserResponse> getAllUsers() {
        return userRepository.findAll().stream().map(userMapper::toUserResponse).toList();
    }

    @Override
    public UserResponse upadateUser(String id, UserUpdateRequest request) {
        var user = userRepository.findById(id).orElseThrow(() -> new ApplicationException(ErrorCode.USER_NOT_FOUND));
        user = userMapper.toUpdateUser(user, request);
        return userMapper.toUserResponse(userRepository.save(user));
    }

    @Override
    public UserResponse getUserById(String id) {
        var user = userRepository.findById(id).orElseThrow(() -> new ApplicationException(ErrorCode.USER_NOT_FOUND));
        return userMapper.toUserResponse(user);
    }

}
