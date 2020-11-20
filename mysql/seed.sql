create database preferences;

use preferences;

create table preferences (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `ip` VARCHAR(20),
    `preference` VARCHAR(10)
);