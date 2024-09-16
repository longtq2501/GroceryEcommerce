package com.tft_project.identity_project.controller;

import com.tft_project.identity_project.dto.request.ApiResponse;
import com.tft_project.identity_project.dto.request.PermissionRequest;
import com.tft_project.identity_project.dto.response.PermissionResponse;
import com.tft_project.identity_project.service.PermissionService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/permission")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class PermissionController {
    PermissionService permissionService;

    @PostMapping("/create")
    ApiResponse<PermissionResponse> createPermission(@RequestBody PermissionRequest request) {
        return ApiResponse.<PermissionResponse>builder()
                .result(permissionService.createPermission(request))
                .build();
    }

    @PutMapping("/update/{id}")
    ApiResponse<PermissionResponse> updatePermission(@PathVariable String id, @RequestBody PermissionRequest request) {
        return ApiResponse.<PermissionResponse>builder()
                .result(permissionService.updatePermission(id, request))
                .build();
    }
}
