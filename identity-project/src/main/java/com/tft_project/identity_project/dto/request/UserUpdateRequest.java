package com.tft_project.identity_project.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class UserUpdateRequest {
    String firstName;
    String lastName;
    Date dob;
    String sex;
    String email;
    String avatar;
    String phoneNumber;
    String username;
    String password;
}
