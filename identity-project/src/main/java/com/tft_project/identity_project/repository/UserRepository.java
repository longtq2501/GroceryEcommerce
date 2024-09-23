package com.tft_project.identity_project.repository;

import com.tft_project.identity_project.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository
        extends JpaRepository<User, Integer> {
}
