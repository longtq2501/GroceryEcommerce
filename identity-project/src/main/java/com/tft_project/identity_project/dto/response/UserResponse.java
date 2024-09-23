package com.tft_project.identity_project.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class UserResponse {
    Integer id;
    String firstName;
    String lastName;
    String username;
    String password;
    String avatar;
    String email;
    String phoneNumber;
    String cvvNumber;
}
