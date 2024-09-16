package com.tft_project.identity_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tft_project.identity_project.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {


}
