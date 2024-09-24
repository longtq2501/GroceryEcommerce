package com.tft_project.identity_project.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    @Column(name = "first_name", nullable = false)
    String firstName;
    @Column(name = "last_name", nullable = false)
    String lastName;
    @Column(name = "username", nullable = false, unique = true)
    String username;
    @Column(name = "password", nullable = false)
    String password;
    @Column(name = "avatar")
    String avatar;
    @Column(name = "email", nullable = false, unique = true)
    String email;
    @Column(name = "phone_number", unique = true)
    String phoneNumber;
    @Column(name = "cvv_number")
    String cvvNumber;

    @OneToOne(mappedBy = "user")
    SavedCategory savedCategory;

    @OneToMany(mappedBy = "user")
    List<Card> cardList;

    @ManyToOne
    UserRole userRole;
}
