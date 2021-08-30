create database posDB;

use posdb;

drop table tbl_products;
drop table tbl_orders;

select * from tbl_products;
select * from tbl_orders;

insert into tbl_products values('p0001','김밥',2000,'상세설명 : 김밥');
insert into tbl_products values('p0002','라면',3000,'상세설명 : 라면');
insert into tbl_products values('p0003','돈까스',5000,'상세설명 : 돈까스');
insert into tbl_products values('p0004','소주',3000,'상세설명 : 소주');
insert into tbl_products values('p0005','맥주',3000,'상세설명 : 맥주');

