package com.tft_project.identity_project.service.impl;

import com.tft_project.identity_project.dto.request.PermissionRequest;
import com.tft_project.identity_project.dto.response.PermissionResponse;
import com.tft_project.identity_project.enums.ErrorCode;
import com.tft_project.identity_project.exception.ApplicationException;
import com.tft_project.identity_project.mapper.PermissionMapper;
import com.tft_project.identity_project.repository.PermissionRepository;
import com.tft_project.identity_project.service.PermissionService;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class PermissionServiceImpl implements PermissionService {
    PermissionRepository permissionRepository;
    PermissionMapper permissionMapper;


    @Override
    public PermissionResponse createPermission(PermissionRequest request) {
        var permission = permissionMapper.toPermission(request);
        return permissionMapper.toPermissionResponse(permissionRepository.save(permission));
    }

    @Override
    public PermissionResponse updatePermission(String id,PermissionRequest request) {
        var permission = permissionRepository.findById(id)
                .orElseThrow(() -> new ApplicationException(ErrorCode.PERMISSION_NOT_FOUND));
        permission = permissionMapper.toPermission(request);
        return permissionMapper.toPermissionResponse(permissionRepository.save(permission));
    }
}
