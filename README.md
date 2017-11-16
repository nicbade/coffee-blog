# Coffee Blog

A basic coffee blog using Google Maps API
[Heroku link](https://nics-coffee-blog.herokuapp.com/#/shops)

## Built With

AngularJS, Nodejs, Expressjs, Postgresql, Google Maps API

## Getting Started

npm install

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)


### Installing

Steps to get the development environment running.

CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);

CREATE TABLE "review" (
"id" serial primary key,
"name" varchar(80) not null,
"date" varchar(60),
"address" varchar(120),
"food" varchar(10),
"price" int,
"review" varchar(160),
"latitude" numeric(200),
"longitude" numeric(200),
"phone" numeric(30),
"website" varchar(150),
"internet_speed" numeric(20)
);

## Screen Shot

![Screen Shot] (./screenshot.png)

## Documentation

Link to a read-only version of your scope document or other relevant documentation here (optional). Remove if unused.

### Completed Features

High level list of items completed.

- [x] Feature a
- [x] Feature b

### Next Steps

Features that you would like to add at some point in the future.

- [ ] Feature c

## Deployment

Add additional notes about how to deploy this on a live system

## Authors

* Name of author(s)


## Acknowledgments

* Hat tip to anyone who's code was used
