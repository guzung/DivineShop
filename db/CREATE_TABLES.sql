create table holy_categories
(
    id          int auto_increment,
    description varchar(50) charset utf8 null,
    img_url     varchar(300)             null,
    constraint products_types_id_uindex
        unique (id)
);

alter table holy_categories
    add primary key (id);

create table holy_providers
(
    id          int auto_increment,
    name        varchar(100) charset utf8 null,
    description varchar(200) charset utf8 null,
    address     varchar(100) charset utf8 null,
    img_url     varchar(300)              null,
    constraint manufacturers_id_uindex
        unique (id)
)
    comment 'producatori';

alter table holy_providers
    add primary key (id);

create table holy_products
(
    id              int auto_increment,
    name            varchar(300) charset utf8 null,
    description     varchar(300) charset utf8 null,
    type_id         int                       not null,
    manufacturer_id int                       null,
    price           varchar(20) default '0'   null,
    image_url       varchar(400)              null,
    constraint product_id_uindex
        unique (id),
    constraint holy_products_manuf__fk
        foreign key (manufacturer_id) references holy_providers (id),
    constraint holy_products_type__fk
        foreign key (type_id) references holy_categories (id)
);

alter table holy_products
    add primary key (id);

create table sinful_users
(
    id       int auto_increment,
    username varchar(50) charset utf8 null,
    password varchar(100)             null,
    constraint sinful_users_id_uindex
        unique (id)
);

alter table sinful_users
    add primary key (id);


