-- Usando la db MySql
USE mysql;

-- Creando la base de datos
DROP DATABASE IF EXISTS project_odyssey_gestor_proyectos;
CREATE DATABASE project_odyssey_gestor_proyectos;

-- Usando la base de datos
USE project_odyssey_gestor_proyectos;

-- Tabla para guardar el rol de los usuarios
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
    `id_role` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `role_name` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id_role`)
);
-- Insertando valores a "role"
INSERT INTO `role` (
    `id_role`, 
    `role_name`
)
VALUES 
    (1, "Admin. General"),
    (2, "Colaborator");

-- Tabla para guardar los usuarios
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
    `id_user` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(50) NOT NULL,
    `user_surname` VARCHAR(50) NOT NULL,
    `username` VARCHAR(12) NOT NULL,
    `userpassword` VARCHAR(60) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `active` BIT NOT NULL DEFAULT 1,
    `id_role` INT UNSIGNED NOT NULL,
    UNIQUE KEY (`email`),
    PRIMARY KEY (`id_user`),
    FOREIGN KEY (`id_role`) REFERENCES `role`(`id_role`)
);

-- Tabla para guardar el ID del admin general
DROP TABLE IF EXISTS `admin_general`;
CREATE TABLE `admin_general` (
    `id_admin_general` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id_admin_general`),
    FOREIGN KEY (`id_admin_general`) REFERENCES `user`(`id_user`)
);

-- Tabla para guardar el ID del colaborator y sus datos
DROP TABLE IF EXISTS `colaborator`;
CREATE TABLE `colaborator` (
    `id_colaborator` INT UNSIGNED NOT NULL,
    `url_photo` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id_colaborator`),
    FOREIGN KEY (`id_colaborator`) REFERENCES `user`(`id_user`)
);

-- Tabla para guardar los proyectos
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
    `id_project` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `project_name` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `start_datetime` DATETIME NOT NULL,
    `end_datetime` DATETIME NOT NULL,
    PRIMARY KEY (`id_project`)
);

-- Tabla para guardar los roles de los miembros dentro del proyecto
DROP TABLE IF EXISTS `project_role`;
CREATE TABLE `project_role` (
    `id_project_role` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `project_role_name` VARCHAR(25) NOT NULL,
    PRIMARY KEY (`id_project_role`)
);
-- Insertando valores a "project_role"
INSERT INTO `project_role` (
    id_project_role, 
    project_role_name
)
VALUES 
    (1, "Líder del proyecto"),
    (2, "Miembro");

-- Tabla para guardar los miembros del proyecto
DROP TABLE IF EXISTS `members_project`;
CREATE TABLE `members_project` (
    `id_members_project` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `id_colaborator` INT UNSIGNED NOT NULL,
    `id_project_role` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id_members_project`),
    FOREIGN KEY (`id_colaborator`) REFERENCES `colaborator`(`id_colaborator`),
    FOREIGN KEY (`id_project_role`) REFERENCES `project_role`(`id_project_role`)
);



-- [ INSERT INTO ] --
INSERT INTO user(
    id_user,
    user_name,
    user_surname,
    username,
    userpassword,
    email,
    active,
    id_role
) 
    VALUES
    (1, "Diego Edgardo", "Torres De La Cruz", "diegot", "$2a$10$9dDabNh8viE00ZllRHhAA.3UEvpq/7XevLy472LijBO8kvOruajSa", "diegoteodosiof@gmail.com", 1, 1),
    (2, "Ralf Carsten", "Carrasco Stein", "ralfc", "$2a$10$YkcmXbwu9NIIw7ek4x/UUuPZtwzEpvAa7N3hnMcg0bC2pK3/pxoaS", "ralfcarrasco@gmail.com", 1, 2),
    (3, "Manuel Alejandro", "Rivera Becerra", "manuelr", "$2a$10$qon6KKzLiPUaMDfuaYQ0aeO.2yils9vOxsVkAlOouHakcNgSu6gxe", "leunknow@gmail.com", 1, 2);



-- [ STORED PROCEDUREs ] --

-- Stored procedure para el login
DELIMITER //
CREATE PROCEDURE `get_userpassword_by_username`(
    IN p_username VARCHAR(20)
)
BEGIN
    -- Declarando variable para la userpassword
    DECLARE user_password VARCHAR(60) DEFAULT NULL;
    -- Extrayendo la contraseña respectiva al "username" y asignando la variable de userpassword
    SELECT userpassword 
        INTO user_password
    FROM user
    WHERE username = p_username 
        AND active = 1;
    -- Condicional para verificar si se encontro un "userpassword"
    IF user_password IS NULL THEN
        SET user_password = NULL;
    END IF;
    -- Mostrando la userpass
    SELECT user_password AS `userpass`;
END //
DELIMITER ;