CREATE TABLE `cats` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255),
    `age` int,
    `clan_id` int
);

CREATE TABLE `clans` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255),
    `territory_id` int
);

CREATE TABLE `territories` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255),
    `description` text
);

CREATE TABLE `scrolls` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `title` varchar(255),
    `content` text,
    `cat_id` int,
    `created_at` datetime
);

ALTER TABLE `cats`
ADD FOREIGN KEY (`clan_id`) REFERENCES `clans` (`id`);

ALTER TABLE `clans`
ADD FOREIGN KEY (`territory_id`) REFERENCES `territories` (`id`);

ALTER TABLE `scrolls`
ADD FOREIGN KEY (`cat_id`) REFERENCES `cats` (`id`);