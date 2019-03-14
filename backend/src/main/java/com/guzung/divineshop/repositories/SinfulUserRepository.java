package com.guzung.divineshop.repositories;

import com.guzung.divineshop.entities.SinfulUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SinfulUserRepository extends JpaRepository<SinfulUser, Integer> {
    Optional<SinfulUser> findByUsername(String sinfulUser);
}
