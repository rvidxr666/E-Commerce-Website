CREATE DATABASE IF NOT EXISTS ecommerce;
CREATE USER IF NOT EXISTS 'ecomm_user'@'172.17.0.1' IDENTIFIED BY 'ecomm_user';
GRANT ALL PRIVILEGES ON ecommerce.* TO 'ecomm_user'@'172.17.0.1' WITH GRANT OPTION;
-- 'ecomm_user'@'localhost'

CREATE TABLE IF NOT EXISTS ecommerce.products (
	id int NOT NULL AUTO_INCREMENT,
    name TEXT,
    header TEXT,
    full_description TEXT,
    header_image TEXT,
    category_id TEXT,
    price int,
    quantity int,
    CONSTRAINT PRODUCT_ID PRIMARY KEY (id)
);