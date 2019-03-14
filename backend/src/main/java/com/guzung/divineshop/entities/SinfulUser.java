package com.guzung.divineshop.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "sinful_users")
public class SinfulUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Basic
    @Column(name = "username")
    private String username;

    @Basic
    @Column(name = "password")
    private String password;
}
