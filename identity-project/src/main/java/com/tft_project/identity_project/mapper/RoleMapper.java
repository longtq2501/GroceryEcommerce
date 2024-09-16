package com.tft_project.identity_project.mapper;

import com.tft_project.identity_project.dto.request.RoleRequest;
import com.tft_project.identity_project.dto.response.RoleResponse;
import com.tft_project.identity_project.entity.Role;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface RoleMapper {
    @Mapping(target = "permissions", ignore = true)
    Role toRole(RoleRequest request);

    RoleResponse toRoleResponse(Role role);
}
