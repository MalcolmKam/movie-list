CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  title VARCHAR(100) UNIQUE,
  watched INT DEFAULT 0
)