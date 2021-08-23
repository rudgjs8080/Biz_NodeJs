-- % : 어디에서나 접근가능
create user node@'%' identified by '12341234';
-- 모든 권한 부여
Grant All privileges on *.* to node@'%';

create database nodeDB;

