use Product;

drop table Product;
create table Product(
productId varchar(256) Unique not null,
productName varchar(256),
productDescription varchar(3500),
productCategory varchar(256),
units int
);

drop table User;
create table User(
username varchar(256),
password varchar(256)
);


use Product;
insert into User(username,password) Values("airbus01","$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6");
insert into User(username,password) Values("airbus02","$2a$10$ZnnAdfh3cc7a/b1aODLeoOjifNPbHL6Vo8kpRJj.muPsVp1697hJO");
