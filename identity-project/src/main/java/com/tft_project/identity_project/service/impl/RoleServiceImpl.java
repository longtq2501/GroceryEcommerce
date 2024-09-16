package com.tft_project.identity_project.service.impl;

import com.tft_project.identity_project.dto.request.RoleRequest;
import com.tft_project.identity_project.dto.response.RoleResponse;
import com.tft_project.identity_project.entity.Permission;
import com.tft_project.identity_project.enums.ErrorCode;
import com.tft_project.identity_project.exception.ApplicationException;
import com.tft_project.identity_project.mapper.RoleMapper;
import com.tft_project.identity_project.repository.PermissionRepository;
import com.tft_project.identity_project.repository.RoleRepository;
import com.tft_project.identity_project.service.RoleService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE, makeFinal = true)
public class RoleServiceImpl implements RoleService {
    RoleRepository roleRepository;
    RoleMapper roleMapper;
    PermissionRepository permissionRepository;

    @Override
    public RoleResponse createRole(RoleRequest request) {
        var role = roleMapper.toRole(request);
        HashSet<Permission> permissions = new HashSet<>();
        List<Permission> listPermissions = permissionRepository.findAll();
        listPermissions.forEach(permission -> {
            if(request.getPermissions().contains(permission.getName())
                    && permissionRepository.findByName(permission.getName()).isPresent()) {
                permissions.add(permission);
            }
        });
        if(request.getPermissions().size() != permissions.size()) {
            throw new ApplicationException(ErrorCode.PERMISSION_NOT_FOUND);
        }
        role.setPermissions(permissions);
        role = roleRepository.save(role);
        return roleMapper.toRoleResponse(role);
    }

    @Override
    public RoleResponse updateRole(String id, RoleRequest request) {
        var role = roleRepository.findById(id)
                .orElseThrow(() -> new ApplicationException(ErrorCode.ROLE_NOT_FOUND));
        role = roleMapper.toRole(request);
        HashSet<Permission> permissions = new HashSet<>();
        var listPermissions = permissionRepository.findAll();
        listPermissions.stream()
                .map(permission -> request.getPermissions()
                        .contains(permission.getName())
                        ? permissions.add(permission) : new ApplicationException(ErrorCode.PERMISSION_NOT_FOUND));

        role.setPermissions(permissions);
        role = roleRepository.save(role);
        return roleMapper.toRoleResponse(role);
    }
}
