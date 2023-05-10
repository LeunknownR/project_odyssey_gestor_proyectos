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
    `email` VARCHAR(255) NOT NULL,
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

-- Tabla para guardar las tareas
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
    `id_task` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `task_name` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `deadline` DATE,
    `status` ENUM('not_started', 'in_progress', 'completed') NOT NULL DEFAULT 'not_started',
    `id_project` INT UNSIGNED NOT NULL,
    `id_members_project` INT UNSIGNED,
    -- Por si no esta asignada aun al members_proyect - colaborator - user [ID_MEMBERS_PROJECT]
    PRIMARY KEY (`id_task`),
    FOREIGN KEY (`id_project`) REFERENCES `project`(`id_project`),
    FOREIGN KEY (`id_members_project`) REFERENCES `members_project`(`id_members_project`)
);

-- Tabla para guardar las subtareas de cada tarea
DROP TABLE IF EXISTS `subtasks`;
CREATE TABLE `subtasks` (
    `id_subtasks` INT UNSIGNED AUTO_INCREMENT,
    `subtasks_name` VARCHAR(255) NOT NULL,
    `id_task` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id_subtasks`),
    FOREIGN KEY (`id_task`) REFERENCES `task`(`id_task`)
);

-- Tabla para guardar las etiquetas
DROP TABLE IF EXISTS `label`;
CREATE TABLE `label` (
    `id_label` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `label_name` VARCHAR(255) NOT NULL,
    `color` VARCHAR(7),
    PRIMARY KEY (`id_label`)
);

-- Tabla de relación entre tareas y etiquetas
DROP TABLE IF EXISTS `task_label`;
CREATE TABLE `task_label` (
    `id_task` INT UNSIGNED NOT NULL,
    `id_label` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id_task`, `id_label`),
    FOREIGN KEY (`id_task`) REFERENCES `task`(`id_task`),
    FOREIGN KEY (`id_label`) REFERENCES `label`(`id_label`)
);



-- INSERT INTO --
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
    (1, "Diego Edgardo", "Torres De La Cruz", "diegot", "diegot123", "diegoteodosiof@gmail.com", 1, 1),
    (2, "Ralf Carsten", "Carrasco Stein", "ralfc", "ralfc123", "ralfcarrasco@gmail.com", 1, 2);


-- STORED PROCEDUREs --
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

    IF user_password IS NULL THEN
        SET user_password = NULL;
    END IF;

    -- Mostrando la userpass
    SELECT user_password AS `userpass`;
END //
DELIMITER ;