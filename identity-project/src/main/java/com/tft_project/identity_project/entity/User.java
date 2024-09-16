package com.tft_project.identity_project.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;
    @Column(name = "first_name")
    String firstName;
    @Column(name = "last_name")
    String lastName;
    @Column(name = "date_of_birth")
    @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
    Date dob;
    @Column(name = "sex")
    String sex;
    @Column(unique = true, name = "email")
    String email;
    @Column(name = "avatar")
    String avatar;
    @Column(name = "phone_number")
    String phoneNumber;
    @Column(name = "username", unique = true)
    String username;
    @Column(name = "password")
    String password;
    @ManyToMany(fetch = FetchType.EAGER)
    Set<Role> roles;
}
