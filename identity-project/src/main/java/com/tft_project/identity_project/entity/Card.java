package com.tft_project.identity_project.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    @Column(name = "number_of_card", nullable = false, unique = true)
    int numberOfCard;
    @Column(name = "holder_name", nullable = false)
    String holderName;
    @Column(name = "expired_time", nullable = false)
    Date expiredTime;
    @Column(name = "cvc_number", nullable = false)
    int cvcNumber;
    @ManyToOne(fetch = FetchType.LAZY)
    User user;
}
