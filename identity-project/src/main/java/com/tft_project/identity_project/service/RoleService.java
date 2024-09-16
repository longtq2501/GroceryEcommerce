package com.tft_project.identity_project.service;

import com.tft_project.identity_project.dto.request.RoleRequest;
import com.tft_project.identity_project.dto.response.RoleResponse;

public interface RoleService {
    RoleResponse createRole(RoleRequest request);

    RoleResponse updateRole(String id, RoleRequest request);
}
