package com.tft_project.identity_project.service;

import com.tft_project.identity_project.dto.request.PermissionRequest;
import com.tft_project.identity_project.dto.response.PermissionResponse;

public interface PermissionService {
    PermissionResponse createPermission(PermissionRequest request);
    PermissionResponse updatePermission(String id, PermissionRequest request);
}
