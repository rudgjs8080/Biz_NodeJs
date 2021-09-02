create database posDB;

use posdb;
show tables;
desc tbl_products;

drop table tbl_products;
drop table tbl_table_orders;

select * from tbl_products;
select * from tbl_table_orders;

insert into tbl_products (p_code, p_name, p_price) values
('P0001', '김밥', 1000),
('P0002', '라면', 2000),
('P0003', '돈까스', 5000),
('P0004', '쫄면', 3000),
('P0005', '소주', 3000),
('P0006', '맥주', 3000),
('P0007', '음료수', 1000)

select to_table_id, count(to_table_id)



