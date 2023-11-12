-- Create database if not exists
CREATE DATABASE IF NOT EXISTS `human_friends`;

-- Create user and grant privileges
CREATE USER 'animal_tracker'@'%' IDENTIFIED WITH 'caching_sha2_password' BY 'tracker123';
GRANT ALL ON `human_friends`.* TO 'animal_tracker'@'%';
FLUSH PRIVILEGES;

-- Switch to the created database
USE `human_friends`;

-- Create 'pets' table
CREATE TABLE IF NOT EXISTS `pets`
(
    `id`        bigint      NOT NULL AUTO_INCREMENT,
    `name`      varchar(32) NOT NULL,
    `type`      varchar(32) NOT NULL,
    `birthDate` DATETIME    NOT NULL,
    `commands`  varchar(100) DEFAULT NULL,
    PRIMARY KEY (`id`)
) engine = InnoDB
  auto_increment = 1
  default charset = utf8mb3;

-- Insert data into 'pets' table
INSERT INTO `pets` (`name`, `type`, `birthDate`, `commands`)
VALUES ('Fido', 'Dog', '2020-01-01', 'Sit, Stay, Fetch'),
       ('Whiskers', 'Cat', '2019-05-15', 'Sit, Pounce'),
       ('Hammy', 'Hamster', '2021-03-10', 'Roll, Hide'),
       ('Buddy', 'Dog', '2018-12-10', 'Sit, Paw, Bark'),
       ('Smudge', 'Cat', '2020-02-20', 'Sit, Pounce, Scratch'),
       ('Peanut', 'Hamster', '2021-08-01', 'Roll, Spin'),
       ('Bella', 'Dog', '2019-11-11', 'Sit, Stay, Roll'),
       ('Oliver', 'Cat', '2020-06-30', 'Meow, Scratch, Jump');

-- Create 'pack_animals' table
CREATE TABLE IF NOT EXISTS `pack_animals`
(
    `id`        bigint      NOT NULL AUTO_INCREMENT,
    `name`      varchar(32) NOT NULL,
    `type`      varchar(32) NOT NULL,
    `birthDate` DATETIME    NOT NULL,
    `commands`  varchar(100) DEFAULT NULL,
    PRIMARY KEY (`id`)
) engine = InnoDB
  auto_increment = 1
  default charset = utf8mb3;

-- Insert data into 'pack_animals' table
INSERT INTO `pack_animals` (`name`, `type`, `birthDate`, `commands`)
VALUES ('Thunder', 'Horse', '2015-07-21', 'Trot, Canter, Gallop'),
       ('Sandy', 'Camel', '2016-11-03', 'Walk, Carry Load'),
       ('Eeyore', 'Donkey', '2017-09-18', 'Walk, Carry Load, Bray'),
       ('Storm', 'Horse', '2014-05-05', 'Trot, Canter'),
       ('Dune', 'Camel', '2018-12-12', 'Walk, Sit'),
       ('Burro', 'Donkey', '2019-01-23', 'Walk, Bray, Kick'),
       ('Blaze', 'Horse', '2016-02-29', 'Trot, Jump, Gallop'),
       ('Sahara', 'Camel', '2015-08-14', 'Walk, Run');
