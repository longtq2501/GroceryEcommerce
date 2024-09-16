package com.tft_project.identity_project.mapper;

import com.tft_project.identity_project.dto.request.PermissionRequest;
import com.tft_project.identity_project.dto.response.PermissionResponse;
import com.tft_project.identity_project.entity.Permission;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PermissionMapper {
    Permission toPermission(PermissionRequest request);
    PermissionResponse toPermissionResponse(Permission permission);
}
