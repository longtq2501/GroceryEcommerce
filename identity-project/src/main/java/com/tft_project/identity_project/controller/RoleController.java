package com.tft_project.identity_project.controller;

import com.tft_project.identity_project.dto.request.ApiResponse;
import com.tft_project.identity_project.dto.request.RoleRequest;
import com.tft_project.identity_project.dto.response.RoleResponse;
import com.tft_project.identity_project.service.RoleService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/role")
@RequiredArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class RoleController {
    RoleService roleService;

    @PostMapping("/create")
    ApiResponse<RoleResponse> createRole(@RequestBody RoleRequest request ) {
        return ApiResponse.<RoleResponse>builder()
                .result(roleService.createRole(request))
                .build();
    }

    @PutMapping("/update/{id}")
    ApiResponse<RoleResponse> updateRole(@PathVariable String id, @RequestBody RoleRequest request) {
        return ApiResponse.<RoleResponse>builder()
                .result(roleService.updateRole(id, request))
                .build();
    }
}
