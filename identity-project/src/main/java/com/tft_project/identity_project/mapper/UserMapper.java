package com.tft_project.identity_project.mapper;

import com.tft_project.identity_project.dto.request.UserRequest;
import com.tft_project.identity_project.dto.response.UserResponse;
import com.tft_project.identity_project.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper
public interface UserMapper {
    User toUser(UserRequest userRequest);

    UserResponse toUserResponse(User user);

    User toUpdateUser (@MappingTarget User user, UserRequest request);
}
