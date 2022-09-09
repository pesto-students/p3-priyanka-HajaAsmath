create table CITIES
      (
          id        int auto_increment,
          city_name varchar(54) not null,
          state     varchar(54) null,
          constraint CITIES_pk
              primary key (id)
      );

create unique index CITIES_id_uindex
          on CITIES (id);

create table WAREHOUSE
      (
          id             int auto_increment,
          warehouse_name varchar(24) not null,
          capacity       int         null,
          city_id        int         not null,
          constraint WAREHOUSE_pk
              primary key (id),
          constraint WAREHOUSE_CITIES_id_fk
              foreign key (city_id) references CITIES (id)
                  on update cascade
      );

create unique index WAREHOUSE_id_uindex
          on WAREHOUSE (id);

create table ORDERS
      (
          id           int auto_increment,
          warehouse_id int         not null,
          store_name   varchar(54) null,
          constraint ORDERS_pk
              primary key (id),
          constraint ORDERS_WAREHOUSE_id_fk
              foreign key (warehouse_id) references WAREHOUSE (id)
                  on update cascade on delete cascade
      );

create unique index ORDERS_id_uindex
          on ORDERS (id);

create table STORE
      (
          id           int auto_increment,
          city_id      int         null,
          warehouse_id int         null,
          store_name   varchar(54) null,
          constraint STORE_pk
              primary key (id),
          constraint STORE_CITIES_id_fk
              foreign key (city_id) references CITIES (id)
                  on update cascade on delete cascade,
          constraint STORE_WAREHOUSE_id_fk
              foreign key (warehouse_id) references WAREHOUSE (id)
                  on update cascade on delete cascade
      );

create unique index STORE_id_uindex
          on STORE (id);

create table ITEM
      (
          id        int auto_increment,
          item_desc varchar(124) null,
          weight    decimal      not null,
          price     int          not null,
          constraint ITEM_pk
              primary key (id)
      );

create unique index ITEM_id_uindex
          on ITEM (id);

create table SHOPPING_CART
      (
          order_id int not null,
          item_id  int not null,
          constraint SHOPPING_CART_ITEM_id_fk
              foreign key (item_id) references ITEM (id)
                  on update cascade on delete cascade,
          constraint SHOPPING_CART_ORDERS_id_fk
              foreign key (order_id) references ORDERS (id)
                  on update cascade on delete cascade
      );

create table CUSTOMER
      (
          id            int auto_increment,
          order_id      int not null,
          customer_name int not null,
          constraint CUSTOMER_pk
              primary key (id),
          constraint CUSTOMER_ORDERS_id_fk
              foreign key (order_id) references ORDERS (id)
      );

create unique index CUSTOMER_id_uindex
          on CUSTOMER (id);

create table INVENTORY
      (
          store_id int not null,
          item_id  int not null,
          constraint INVENTORY_ITEM_id_fk
              foreign key (item_id) references ITEM (id),
          constraint INVENTORY_STORE_id_fk
              foreign key (store_id) references STORE (id)
      );