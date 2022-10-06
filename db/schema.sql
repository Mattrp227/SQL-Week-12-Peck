DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE roles(
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
);

CREATE TABLE employees (
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
);
