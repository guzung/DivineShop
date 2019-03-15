package com.guzung.divineshop.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "holy_products")
public class HolyProduct {

    @Id
    @Column(name = "id")
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private Integer id;

    @Basic
    @Column(name = "name")
    private String name;

    @Basic
    @Column(name = "description")
    private String description;

    @Basic
    @Column(name = "image_url")
    private String imageUrl;

    @Basic
    @Column(name = "price")
    private String price;

    @Transient
    private Boolean showImage = false;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "manufacturer_id")
    private HolyProvider holyProvider;
}
