DROP DATABASE IF EXISTS Bamazondb;

CREATE DATABASE Bamazondb;

USE Bamazondb;

CREATE TABLE products (
    product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR (50) NOT NULL,
    price INT (50) NOT NULL,
    stock_quantity INT (50) NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("ama", "sunglasses", 65.00, 49);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("dablam", "sunglasses", 65.00, 49);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("parijat", "sunglasses", 65.00, 49);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("sama", "sunglasses", 55.00, 49);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("ethosII", "sunglasses", 60.00, 49);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("lekh", "sunglasses", 60.00, 49);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("pazeo", "eyedrop", 5.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("guitar", "instruments", 200.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("daisy dream", "perfume", 80.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("jimmy choo", "perfume", 80.00, 20);

SELECT * FROM products;







