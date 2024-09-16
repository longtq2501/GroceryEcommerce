package com.tft_project.identity_project.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public class ProductRepository extends JpaRepository<Product, Integer>{

    
}
