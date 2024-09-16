package com.tft_project.identity_project.mapper;

import com.tft_project.identity_project.dto.request.UserCreateRequest;
import com.tft_project.identity_project.dto.request.UserUpdateRequest;
import com.tft_project.identity_project.dto.response.UserResponse;
import com.tft_project.identity_project.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(target = "roles", ignore = true)
    User toUser(UserCreateRequest request);

    User toUpdateUser(@MappingTarget User user, UserUpdateRequest request);

    UserResponse toUserResponse(User user);
}
