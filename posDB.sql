create database posDB;

use posdb;

create table tbl_product (
p_code	char(10) primary key,
p_name	varchar(30)	not null,	
p_price	int	not null	,
p_detail	varchar(255)		
);
drop table tbl_products;
drop table tbl_tables;
drop table tbl_orders;
select * from tbl_products;
select * from tbl_tables;
select * from tbl_orders;
insert into tbl_products values('p001','김밥',2000,'상세설명 : 김밥');
insert into tbl_products values('p002','라면',3000,'상세설명 : 라면');
insert into tbl_products values('p003','돈까스',5000,'상세설명 : 돈까스');
insert into tbl_products values('p004','소주',3000,'상세설명 : 소주');
insert into tbl_products values('p005','맥주',3000,'상세설명 : 맥주');

