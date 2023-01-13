CREATE DATABASE IF NOT EXISTS ecommerce;
CREATE USER IF NOT EXISTS 'ecomm_user'@'172.17.0.1' IDENTIFIED BY 'ecomm_user';
GRANT ALL PRIVILEGES ON ecommerce.* TO 'ecomm_user'@'172.17.0.1' WITH GRANT OPTION;
-- 'ecomm_user'@'localhost'

CREATE TABLE IF NOT EXISTS ecommerce.products (
	product_id int NOT NULL AUTO_INCREMENT,
    name TEXT,
    header TEXT,
    full_description TEXT,
    header_image TEXT,
    category_id TEXT,
    price int,
    quantity int,
    CONSTRAINT PRODUCT_ID PRIMARY KEY (product_id)
);


CREATE TABLE IF NOT EXISTS ecommerce.categories (
    category VARCHAR(64) NOT NULL ,
    description TEXT,
    picture_url TEXT, 
    CONSTRAINT CATEGORY_NAME PRIMARY KEY (category)
);


CREATE TABLE IF NOT EXISTS ecommerce.users (
    email VARCHAR(64) NOT NULL ,
    name TEXT,
    surname TEXT,
    password TEXT, 
    gender CHAR,
    finance INT, 
    birth_date DATE,
    CONSTRAINT CATEGORY_NAME PRIMARY KEY (email)
);


CREATE TABLE IF NOT EXISTS ecommerce.transactions (
    transaction_id int NOT NULL AUTO_INCREMENT,
    user_email TEXT,
    product_id INT,
    timestamp TIMESTAMP,
    quantity INT, 
    status TEXT,
    CONSTRAINT TRANSACTION_KEY PRIMARY KEY (transaction_id)
);