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
    `id_role` CHAR(3) NOT NULL,
    PRIMARY KEY (`id_role`)
);
-- Insertando valores a "role"
INSERT INTO `role` (
    `id_role`
)
VALUES 
    ("GAD"),
    ("CLB");

-- Tabla para guardar los usuarios
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
    `id_user` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(50) NOT NULL,
    `user_surname` VARCHAR(50) NOT NULL,
    `username` VARCHAR(12) NOT NULL,
    `userpassword` VARCHAR(60) NOT NULL,
    `url_photo` VARCHAR(100) DEFAULT NULL,
    `email` VARCHAR(50) NOT NULL,
    `active` BIT NOT NULL DEFAULT 1,
    `id_role` CHAR(3) NOT NULL,
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
DROP TABLE IF EXISTS `collaborator`;
CREATE TABLE `collaborator` (
    `id_collaborator` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id_collaborator`),
    FOREIGN KEY (`id_collaborator`) REFERENCES `user`(`id_user`)
);

-- Tabla para guardar los proyectos
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
    `id_project` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `project_name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(200),
    `creation_date` DATE NOT NULL,
    `state` ENUM('O', 'F', 'P') NOT NULL,
    `start_date` DATE NOT NULL,
    `end_date` DATE NOT NULL,
    `active` BIT NOT NULL DEFAULT 1,
    `id_admin_general` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id_project`),
    FOREIGN KEY (`id_admin_general`) REFERENCES `admin_general`(`id_admin_general`)
);

-- Tabla para guardar los roles de los miembros dentro del proyecto
DROP TABLE IF EXISTS `project_role`;
CREATE TABLE `project_role` (
    `id_project_role` CHAR(3) NOT NULL,
    PRIMARY KEY (`id_project_role`)
);
-- Insertando valores a "project_role"
INSERT INTO `project_role` (
    id_project_role
)
VALUES 
    ("PLD"),
    ("PMB");

-- Tabla para guardar los miembros del proyecto
DROP TABLE IF EXISTS `members_project`;
CREATE TABLE `members_project` (
    `id_members_project` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `id_project` INT UNSIGNED NOT NULL,
    `id_collaborator` INT UNSIGNED NOT NULL,
    `id_project_role` CHAR(3) NOT NULL,
    PRIMARY KEY (`id_members_project`),
    FOREIGN KEY (`id_project`) REFERENCES `project`(`id_project`),
    FOREIGN KEY (`id_collaborator`) REFERENCES `collaborator`(`id_collaborator`),
    FOREIGN KEY (`id_project_role`) REFERENCES `project_role`(`id_project_role`)
);



-- --- [ INSERT INTO ] ------------------------------------------------------------
-- Insertando datos en la tabla user
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
    (1, "Diego Edgardo", "Torres De La Cruz", "diegot", "$2a$10$9dDabNh8viE00ZllRHhAA.3UEvpq/7XevLy472LijBO8kvOruajSa", "diegoteodosiof@gmail.com", 1, "GAD"),
    (2, "Ralf Carsten", "Carrasco Stein", "ralfc", "$2a$10$YkcmXbwu9NIIw7ek4x/UUuPZtwzEpvAa7N3hnMcg0bC2pK3/pxoaS", "ralfcarrasco@gmail.com", 1, "CLB"),
    (3, "Manuel Alejandro", "Rivera Becerra", "manuelr", "$2a$10$qon6KKzLiPUaMDfuaYQ0aeO.2yils9vOxsVkAlOouHakcNgSu6gxe", "leunknownr@gmail.com", 1, "CLB");

-- Insertando datos en la tabla admin. General
INSERT INTO admin_general(
    id_admin_general
)
VALUES
    (1);

-- Insertando datos en la tabla collaborator
INSERT INTO collaborator(
    id_collaborator
)
VALUES
    (2),
    (3);

-- --- [ STORED PROCEDUREs ] ------------------------------------------------------------
-- SP para el login
DELIMITER //
CREATE PROCEDURE `sp_get_userpassword_by_username`(
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

-- SP para traer la información basica de un user segun su username
DELIMITER //
CREATE PROCEDURE `sp_get_basic_user_information`(
    IN p_username VARCHAR(20)
)
BEGIN
    -- Trayendo la información cuando el usernema coincida
    SELECT 
        u.id_user, 
        u.user_name, 
        u.user_surname,  
        u.username, 
        u.url_photo,
        u.id_role
    FROM user u
    JOIN role r ON u.id_role = r.id_role
    WHERE u.username = p_username;
END //
DELIMITER ;

/*¨OJO CON EL ACTIVE"*/
-- SP para 
DELIMITER //
CREATE PROCEDURE `sp_get_project_list_by_project_name`(
    IN p_project_name VARCHAR(50)
)
BEGIN
    SELECT 
    p.id_project,
    p.project_name,
    p.description,
    p.state,
    p.start_date,
    p.end_date,
    u.user_name,
    u.user_surname,
    u.email,
    u.url_photo,
    mmr.member_role
    FROM project p
    INNER JOIN members_project mmr ON p.id_project = mmr.id_project
    INNER JOIN user u ON mmr.id_collaborator = u.id_user;
END //
DELIMITER ;

-- SP para la busqueda de los colaboradores que existen segun el nombre
DELIMITER //
CREATE PROCEDURE `sp_search_collaborator_by_username`(
    IN p_collaborator_name VARCHAR(50)
)
BEGIN
    -- Seteando lo que se desea buscar con el formato más optimo
    SET @search_collaborator_name = UPPER(CONCAT('%',p_collaborator_name,'%'));

    -- Trayendo la información cuando el usernema coincida
    SELECT
        clb.id_collaborator,
        u.user_name,
        u.user_surname,
        u.url_photo
    FROM collaborator clb
    INNER JOIN user u ON clb.id_collaborator = u.id_user 
    WHERE u.active = 1
    AND u.user_name LIKE @search_collaborator_name
    ORDER BY u.user_name, u.user_surname ASC;
END //
DELIMITER ;
-- CALL sp_search_collaborator_by_username("");

-- SP para la creacion de un nuevo proyecto
DELIMITER //
CREATE PROCEDURE `sp_create_project`(
    IN p_id_admin_general INT,
    IN p_project_name VARCHAR(50),
    IN p_project_description VARCHAR(200),
    IN p_project_start_date DATE,
    IN p_project_end_date DATE,
    IN p_id_collaborator INT
)
BEGIN
    -- Validaciones previas a la creación del proyecto
    IF NOT EXISTS(
        SELECT id_project
        FROM project
        WHERE project_name = p_project_name
    ) THEN
        -- Creación de un nuevo proyecto
        INSERT INTO project (
            project_name,
            description,
            creation_date,
            state,
            start_date,
            end_date,
            id_admin_general
        ) VALUES (
            p_project_name,
            p_project_description,
            NOW(),
            'O',
            p_project_start_date,
            p_project_end_date,
            p_id_admin_general
        );

        -- Seteando el ultimo id de proyecto insertado
        SET @id_project = LAST_INSERT_ID();

        -- Insertando el miembro que sera lider
        INSERT INTO members_project (
            id_project,
            id_collaborator,
            id_project_role
        ) VALUES (
            @id_project,
            p_id_collaborator,
            'PLD'
        );

        -- Mostrando el mensaje de exito
        SELECT 'SUCCESS' AS 'MESSAGE';
    END IF;
END //
DELIMITER ;
-- CALL sp_create_project(1,"tilin","asodaosdwas","2023-05-15","2023-10-01",2);

-- SP para la eliminación de un projecto
DELIMITER //
CREATE PROCEDURE `sp_delete_project_by_id_project`(
    IN p_id_project INT
)
BEGIN
    -- Validando si el proyecto que se quiere eliminar aun existe (esta activado)
    IF EXISTS (
        SELECT *
        FROM project
        WHERE id_project = p_id_project
        AND active = 1
    ) THEN
        -- Actualizando "Eliminando" el registro del proyecto
        UPDATE project
        SET active = 0
        WHERE id_project = p_id_project;
    ELSE
        SELECT 'PROJECT_NOT_EXISTS' AS 'MESSAGE';
    END IF;
    SELECT 'SUCCESS' AS 'MESSAGE';
END //
DELIMITER ;
-- CALL sp_delete_project_by_id_project(1);

-- Sp para ver los detalles de los proyectos segun su id
-- DELIMITER //
-- CREATE PROCEDURE `sp_get_project_details_by_project_id`(
--     IN p_id_project INT
-- )
-- BEGIN
    
-- END //
-- DELIMITER ;

-- SP para actualizar un projecto identificandolo por su id_project
-- DELIMITER //
-- CREATE PROCEDURE `sp_update_project_by_project_id`(
--     IN p_id_project INT,
--     IN p_project_name VARCHAR(50),
--     IN p_project_description VARCHAR(200),
--     IN p_project_start_date DATE,
--     IN p_project_end_date DATE,
--     IN p_id_collaborator INT
-- )
-- BEGIN

-- END //
-- DELIMITER ;