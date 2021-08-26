use nodedb;

create database nodedb;
use nodedb;

desc tbl_replies;

drop table tbl_replies;

select * from tbl_replies;

create User node@localhost;
show grants for 'node';
grant all privileges on *.* to 'node';

drop user node@localhost;

create user node@'%';
grant all privileges on *.* to
'node';

alter user 'node'
identified with mysql_native_password
by '12341234';
flush privileges;

select * from tbl_bbs;