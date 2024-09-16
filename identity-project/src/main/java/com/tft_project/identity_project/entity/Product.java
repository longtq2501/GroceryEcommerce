package com.tft_project.identity_project.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(name = "image")
    String image;

    @Column(name = "owner_name")
    String ownerName;

    @Column(name = "name")
    String name;
    @Column(name = "price")

    String price;

    @Column(name = "rate")
    String rate;

    @Column(name = "size")
    String size;

    @Column(name = "weight")
    String weight;

    @Column(name = "discount")
    String discount;

    @Column(name = "description")
    String description;

    @Column(name = "state")
    String state;

    @Column(name = "brand")
    String brand;
}
