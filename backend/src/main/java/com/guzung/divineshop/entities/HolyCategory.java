package com.guzung.divineshop.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@Table(name = "holy_categories")
public class HolyCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Basic
    @Column(name = "description")
    private String description;

    @Basic
    @Column(name = "img_url")
    private String imgUrl;

    @OneToMany(cascade = CascadeType.DETACH)
    @JoinColumn(name = "type_id")
    private Set<HolyProduct> products;
}
