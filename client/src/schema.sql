CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) UNIQUE,
  watch_status INT DEFAULT 0
)