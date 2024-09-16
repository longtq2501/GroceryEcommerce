package com.tft_project.identity_project.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class UserResponse {
    String id;
    String firstName;
    String lastName;
    Date dob;
    String sex;
    String email;
    String avatar;
    String phoneNumber;
    String username;
    Set<RoleResponse> roles;
}
