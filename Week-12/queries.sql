select MIN(weight) from ITEM;

select distinct(warehouse_name) from WAREHOUSE left join CITIES C on C.id = WAREHOUSE.city_id where city_name='PUNE';

select i.id, item_desc, weight, price from ITEM i left join SHOPPING_CART SC on i.id = SC.item_id left join ORDERS O on O.id = SC.order_id left join CUSTOMER C on C.id = O.customer_id where C.customer_name='HAJA';

select  name, max(mycount) from (select count(warehouse_name) mycount, warehouse_name name from WAREHOUSE w left join STORE S on w.id = S.warehouse_id group by warehouse_id) mycount;

select min(i.id), i.item_desc from ITEM i left join SHOPPING_CART SC on i.id = SC.item_id left join ORDERS O on O.id = SC.order_id;

select * from CUSTOMER left join ORDERS O on CUSTOMER.id = O.customer_id;