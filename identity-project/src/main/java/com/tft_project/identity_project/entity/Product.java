package com.tft_project.identity_project.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    String image;
    @Column(name = "owner_name", nullable = false)
    String ownerName;
    @Column(name = "product_name", nullable = false)
    String productName;
    String price;
    String rate;
    String size;
    String brand;
    Integer weight;
    String discount;
    String state;
    Integer quantity;

    @ManyToOne
    SavedCategory savedCategory;

    @ManyToOne
    ProductCategory productCategory;
}
