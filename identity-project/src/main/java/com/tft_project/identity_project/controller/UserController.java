package com.tft_project.identity_project.controller;

import com.tft_project.identity_project.dto.request.ApiResponse;
import com.tft_project.identity_project.dto.request.UserRequest;
import com.tft_project.identity_project.dto.response.UserResponse;
import com.tft_project.identity_project.services.UserService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE, makeFinal = true)
public class UserController {
    UserService userService;

    @GetMapping("/{id}")
    private ApiResponse<UserResponse> getUser (@PathVariable Integer id) {
        return ApiResponse.<UserResponse>builder()
                .data(userService.getUser(id))
                .build();
    }

    @PostMapping
    private ApiResponse<UserResponse> create (@RequestBody UserRequest request) {
        return ApiResponse.<UserResponse>builder()
                .data(userService.createUser(request))
                .build();
    }

    @PutMapping("update/{id}")
    private ApiResponse<UserResponse> update (@PathVariable Integer id, @RequestBody UserRequest request) {
        return ApiResponse.<UserResponse>builder()
                .data(userService.updateUser(id, request))
                .build();
    }

    @DeleteMapping("delete/{id}")
    private ApiResponse<Void> delete (@PathVariable Integer id) {
        userService.deleteUser(id);
        return ApiResponse.<Void>builder()
                .build();
    }
}
