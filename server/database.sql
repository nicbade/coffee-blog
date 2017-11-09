CREATE TABLE "review" (
"id" serial primary key,
"name" varchar(80) not null,
"date" varchar(60),
"address" varchar(120),
"food" varchar(10),
"price" int,
"review" varchar(160),
"latitude" numeric(200),
"longitude" numeric(200)
);

CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);