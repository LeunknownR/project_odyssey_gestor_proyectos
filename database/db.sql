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
    `role_name` VARCHAR(30) NOT NULL,
    PRIMARY KEY (`id_role`)
);
-- Insertando valores a "role"
INSERT INTO `role`(`id_role`, `role_name`)
VALUES 
    ('GAD', 'Admin. general'),
    ('CLB', 'Colaborador');

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
    `id_deleter` INT UNSIGNED DEFAULT NULL,
    `id_admin_general` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id_project`),
    FOREIGN KEY (`id_admin_general`) REFERENCES `admin_general`(`id_admin_general`)
);

-- Tabla para guardar los roles de los miembros dentro del proyecto
DROP TABLE IF EXISTS `project_role`;
CREATE TABLE `project_role` (
    `id_project_role` CHAR(3) NOT NULL,
    `project_role_name` VARCHAR(30) NOT NULL,
    PRIMARY KEY (`id_project_role`)
);
-- Insertando valores a "project_role"
INSERT INTO `project_role`(`id_project_role`, `project_role_name`)
VALUES 
    ('PLD', 'Líder del proyecto'),
    ('PMB', 'Miembro del proyecto');

-- Tabla para guardar los miembros del proyecto
DROP TABLE IF EXISTS `project_has_collaborator`;
CREATE TABLE `project_has_collaborator` (
    `id_project_has_collaborator` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `id_project` INT UNSIGNED NOT NULL,
    `id_collaborator` INT UNSIGNED NOT NULL,
    `active` BIT NOT NULL DEFAULT 1,
    `id_deleter`  INT UNSIGNED DEFAULT NULL,
    `id_project_role` CHAR(3) NOT NULL,
    PRIMARY KEY (`id_project_has_collaborator`),
    FOREIGN KEY (`id_project`) REFERENCES `project`(`id_project`),
    FOREIGN KEY (`id_collaborator`) REFERENCES `collaborator`(`id_collaborator`),
    FOREIGN KEY (`id_project_role`) REFERENCES `project_role`(`id_project_role`)
);



-- --- [ INSERT INTO ] ------------------------------------------------------------
-- Insertando datos en la tabla user
INSERT INTO `user` (`id_user`, `user_name`, `user_surname`, `username`, `userpassword`, `url_photo`, `email`, `id_role`) 
VALUES
    (1, 'Diego Edgardo', 'Torres De La Cruz', 'diegot', '$2a$10$5lDSbUyMEVZbfPFRiYuemesPnHyfdzCyRGoFJNDVpmuhmcFy5Soxe', '/diegot.jpg', 'diegoteodosiof@gmail.com', 'GAD'),
    (2, 'Manuel Alejandro', 'Rivera Becerra', 'manuelr', '$2a$10$FOuqRzBR7drrXGku/hvJAunSKwNzFBxd.0HvL847iazSnLqftCuyG', NULl, 'leunknownr@gmail.com', 'CLB'),
    (3, 'Ralf Carsten', 'Carrasco Stein', 'ralfc', '$2a$10$yhW0eomyv23YbJTx.FG4keIKdmVi4HS9PEoZ5SMtJhRRLYhZFFi8a', NULL, 'ralfcarrasco@gmail.com', 'CLB'),
    (4, 'John', 'Doe', 'johnd', '$2a$10$JHyPCOL0YKEv.x11woSC4eBAIiQRog75kMn8Hdov0qjwvVgdY5.Na', NULL, 'johndoe@example.com', 'CLB'),
    (5, 'Jane', 'Doe', 'janed', '$2a$10$.8vLiaBYFYmaBMcFWmk0YefUvnitcAZh83Dyjrqtz52O7AbrZ/LNa', NULL, 'janedoe@example.com', 'CLB'),
    (6, 'Alice', 'Smith', 'alices', '$2a$10$0hkuRJzYuG4KTgcVruYjLOzqk0RNkieLkSTcrZjhprkPsTcBSuBju', NULL, 'alicesmith@example.com', 'CLB'),
    (7, 'Bob', 'Johnson', 'bobj', '$2a$10$ZSKPZnbVXx5hSUTUbjqF9OaMx3PWVxnVyUFTxqManmlDluKweA/QG', NULL, 'bobjohnson@example.com', 'CLB'),
    (8, 'Maria', 'Garcia', 'mariag', '$2a$10$ZxEqZvDqnL2V4Qe4dK5xAuwkeZFirKECxZRDOYkX4DBs8Do2yR3Te', NULL, 'mariagarcia@example.com', 'CLB'),
    (9, 'Jose', 'Martinez', 'josem', '$2a$10$nRus1hX3stTK5cAVMHi3MeJEDxaQMslfCunxuNboFQbgsKFpSqzwW', NULL, 'josemartinez@example.com', 'CLB'),
    (10, 'Amanda', 'Brown', 'amandab', '$2a$10$aDD7cz/hQnoD2VTDiTAmOeqFj/.hZhIcCGLERPnIIUBlX0aOc85Pi', NULL, 'amandabrown@example.com', 'CLB'),
    (11, 'Matthew', 'Davis', 'matthewd', '$2a$10$CXEPzSABiUSUXNcSLQgO5eentZKf8.pe7RgKSDSbqKERW/dPagOMu', NULL, 'matthewdavis@example.com', 'CLB'),
    (12, 'Ashley', 'Wilson', 'ashleyw', '$2a$10$9ZvfMaJR.ndHpk3KcuFmM.t0P/Vl.AaGtPsYRyb6a4VUC509JX9le', NULL, 'ashleywilson@example.com', 'CLB'),
    (13, 'Michael', 'Anderson', 'michaela', '$2a$10$CbL0aK4/CL7jW6Ijpk1LveCstTbt7Pqk9Bm3Lbj9rXZKTfVx79Pea', NULL, 'michaelanderson@example.com', 'CLB'),
    (14, 'Linda', 'Gonzalez', 'lindag', '$2a$10$Cb/Z8lUXXzfntJJlBDY1W.AdmI2KxpqZrzkSCEZf86t52kBHM7qL.', NULL, 'lindagonzalez@example.com', 'CLB'),
    (15, 'David', 'Taylor', 'davidt', '$2a$10$ZFzFpb2V30WQwnBVwxkzvehkNqTMZW80G79gQ/mgwnxDwVEhL8ANu', NULL, 'davidtaylor@example.com', 'CLB'),
    (16, 'Sarah', 'Lee', 'sarahl', '$2a$10$1R1ypXm5VjeKxlOK/039S.ySrKQk0EF/oCaG0k1eXhdSZDv9H1lZu', NULL, 'sarahlee@example.com', 'CLB'),
    (17, 'Daniel', 'Martin', 'danielm', '$2a$10$0MZ61DjO5ENfW1OeOSYRgO7tZsLvkBnDFsPP3ofUefAeSusS6c3g2', NULL, 'danielmartin@example.com', 'CLB'),
    (18, 'Emily', 'Clark', 'emilyc', '$2a$10$YdgwhXh9MNvThP9hUm3MZe1lJetaCut/bml9R.4sEpobZYEwG1ig2', NULL, 'emilyclark@example.com', 'CLB'),
    (19, 'Christopher', 'Rodriguez', 'christopherr', '$2a$10$MRVVtZqyPY51FkZotVjgWuGM/0TKuvFOekfW2DdBrDPT3p6jRzq.S', NULL, 'christopherrodriguez@example.com', 'CLB');


-- Insertando datos en la tabla admin. General
INSERT INTO `admin_general`(`id_admin_general`) 
VALUES
    (1);

-- Insertando datos en la tabla collaborator
INSERT INTO `collaborator`(`id_collaborator`) 
VALUES
    (2),
    (3),
    (4),
    (5),
    (6),
    (7),
    (8),
    (9),
    (10),
    (11),
    (12),
    (13),
    (14),
    (15),
    (16),
    (17),
    (18),
    (19);

-- Insertando datos en la tabla collaborator  
INSERT INTO `project` (`id_project`, `project_name`, `description`, `creation_date`, `state`, `start_date`, `end_date`, `id_admin_general`) 
VALUES
    (1, 'Desarrollo de aplicación móvil', 'Aplicación móvil para clientes de la empresa', '2023-05-10', 'O', '2023-05-15', '2023-09-30', 1),
    (2, 'Implementación de sistema de gestión', 'Sistema de gestión para empresa de logística', '2023-05-10', 'F', '2023-05-10', '2023-11-30', 1),
    (3, 'Rediseño de sitio web corporativo', 'Rediseño completo del sitio web de la empresa', '2023-05-09', 'P', '2023-05-20', '2023-08-30', 1),
    (4, 'Desarrollo de software de contabilidad', 'Software de contabilidad para pequeñas empresas', '2023-05-08', 'O', '2023-05-10', '2023-12-31', 1),
    (5, 'Migración de sistema de CRM', 'Migración de sistema de CRM a nueva plataforma', '2023-05-07', 'O', '2023-05-12', '2023-10-31', 1),
    (6, 'Desarrollo de plataforma de e-learning', 'Plataforma de educación en línea', '2023-05-06', 'P', '2023-05-22', '2023-09-30', 1),
    (7, 'Implementación de sistema de gestión de inventarios', 'Sistema de gestión de inventarios para empresa de retail', '2023-05-05', 'F', '2023-05-15', '2023-12-31', 1),
    (8, 'Desarrollo de aplicación web para reservas', 'Aplicación web para reservas de restaurantes', '2023-05-04', 'O', '2023-05-10', '2023-11-30', 1),
    (9, 'Desarrollo de software de gestión de recursos humanos', 'Software de gestión de recursos humanos para pequeñas empresas', '2023-05-03', 'O', '2023-05-08', '2023-12-31', 1),
    (10, 'Implementación de sistema de monitoreo de redes', 'Sistema de monitoreo de redes para empresa de telecomunicaciones', '2023-05-02', 'F', '2023-05-10', '2023-11-30', 1),
    (11, 'Desarrollo de aplicación móvil para ventas', 'Aplicación móvil para vendedores de la empresa', '2023-05-01', 'P', '2023-05-18', '2023-09-30', 1),
    (12, 'Rediseño de aplicación web de gestión de proyectos', 'Rediseño completo de la aplicación web de gestión de proyectos', '2023-04-30', 'O', '2023-05-05', '2023-08-30', 1),
    (13, 'Desarrollo de software de automatización de procesos', 'Software de automatización de procesos para empresa de manufactura', '2023-04-29', 'O', '2023-05-01', '2023-06-01', 1),
    (14, 'Tilin Super proyecto 10k soles', 'app web para la creación de equipos de desarrollo web', '2023-01-01', 'O', '2023-01-05', '2023-06-28', 1);

INSERT INTO `project_has_collaborator` (`id_project_has_collaborator`, `id_project`, `id_collaborator`, `id_project_role`) 
VALUES
    (1, 1, 2, 'PLD'),
    (2, 1, 3, 'PMB'),
    (3, 1, 5, 'PMB'),
    (4, 2, 5, 'PLD'),
    (5, 2, 7, 'PMB'),
    (6, 2, 4, 'PMB'),
    (7, 3, 3, 'PLD'),
    (8, 3, 2, 'PMB'),
    (9, 3, 6, 'PMB'),
    (10, 4, 7, 'PLD'),
    (11, 4, 3, 'PMB'),
    (12, 4, 5, 'PMB'),
    (13, 5, 8, 'PLD'),
    (14, 5, 9, 'PMB'),
    (15, 5, 10, 'PMB'),
    (16, 6, 11, 'PLD'),
    (17, 7, 12, 'PLD'),
    (18, 8, 13, 'PLD'),
    (19, 9, 14, 'PLD'),
    (20, 10, 15, 'PLD'),
    (21, 11, 16, 'PLD'),
    (22, 12, 17, 'PLD'),
    (23, 13, 18, 'PLD'),
    (24, 14, 19, 'PLD');



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
    SELECT user_password AS `userpassword`;
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
        u.id_role,
        r.role_name
    FROM user u
    JOIN role r ON u.id_role = r.id_role
    WHERE u.username = p_username;
END //
DELIMITER ;

-- SP para listar los proyectos segun su nombre
DELIMITER //
CREATE PROCEDURE `sp_get_project_list_by_project_name`(
    IN p_project_name VARCHAR(50)
)
BEGIN
    -- Seteando lo que se desea buscar con el formato más optimo
    SET @search_project_name = UPPER(CONCAT('%',p_project_name,'%'));
    -- Consulta para traer los datos
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
        phc.id_project_role
    FROM project p
    INNER JOIN project_has_collaborator phc ON p.id_project = phc.id_project
    INNER JOIN user u ON phc.id_collaborator = u.id_user
    WHERE p.active = 1
    AND phc.id_project_role = "PLD"
    AND @search_project_name IS NULL OR p.project_name LIKE @search_project_name
    ORDER BY p.start_date DESC, p.project_name ASC
    LIMIT 8;
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
    INSERT INTO project_has_collaborator (
        id_project,
        id_collaborator,
        id_project_role
    ) VALUES (
        @id_project,
        p_id_collaborator,
        'PLD'
    );
    -- Mostrando el mensaje de exito
    SELECT 'SUCCESS' AS 'message';
END //
DELIMITER ;

-- SP para actualizar un projecto identificandolo por su id_project
DELIMITER //
CREATE PROCEDURE `sp_update_project_by_project_id`(
    IN p_id_project INT,
    IN p_project_name VARCHAR(50),
    IN p_project_description VARCHAR(200),
    IN p_project_start_date DATE,
    IN p_project_end_date DATE,
    IN p_id_collaborator INT
)
BEGIN
    -- Extrayendo el id_project_has_collaborator segun el id_project y si es PLD
    SET @id_project_has_collaborator = (
        SELECT id_project_has_collaborator
        FROM project_has_collaborator
        WHERE id_project = p_id_project
        AND id_collaborator = p_id_collaborator
        AND id_project_role = "PLD"
    );
    -- Actualizando la tabla "project"
    UPDATE project
    SET project_name = p_project_name,
        description = p_project_description,
        start_date = p_project_start_date,
        end_date = p_project_end_date
    WHERE id_project = p_id_project;
    -- Actualizando la tabla "project_has_collaborator"
    UPDATE project_has_collaborator
    SET id_collaborator = p_id_collaborator
    WHERE id_project_has_collaborator = @id_project_has_collaborator;
END //
DELIMITER ;

-- SP para la eliminación de un projecto
DELIMITER //
CREATE PROCEDURE `sp_delete_project_by_id_project`(
    IN p_id_project INT,
    IN p_id_admin_general INT
)
BEGIN
    -- Validando si el proyecto que se quiere eliminar aun existe (esta activado)
    IF EXISTS (
        SELECT *
        FROM project
        WHERE id_project = p_id_project
        AND active = 1
        AND id_admin_general = p_id_admin_general
    ) THEN
        -- Actualizando "Eliminando" el registro del proyecto
        UPDATE project
        SET active = 0,
            id_deleter = p_id_admin_general
        WHERE id_project = p_id_project;
        -- Cuando es exitoso
        SELECT 'SUCCESS' AS 'message';
    ELSE
        SELECT 'NOT_DELETED' AS 'message';
    END IF;
END //
DELIMITER ;

-- SP para listar los proyectos segun su nombre
DELIMITER //
CREATE PROCEDURE `sp_get_project_list_for_collaborator`(
    IN p_project_name VARCHAR(50),
    IN p_id_collaborator INT
)
BEGIN
    -- Seteando lo que se desea buscar con el formato más optimo
    SET @search_project_name = UPPER(CONCAT('%',p_project_name,'%'));
    -- Consulta para traer los datos
    SELECT 
        p.id_project,
        p.project_name,
        p.description AS "project_description",
        p.state AS "project_state",
        p.start_date AS "project_start_date",
        p.end_date AS "project_end_date"
    FROM project p
    INNER JOIN project_has_collaborator phc ON p.id_project = phc.id_project
    INNER JOIN user u ON phc.id_collaborator = u.id_user
    WHERE p.active = 1
    AND phc.id_collaborator = p_id_collaborator
    AND p.project_name LIKE @search_project_name
    ORDER BY p.start_date DESC
    LIMIT 8;
END //
DELIMITER ;

-- Sp para ver los detalles de los proyectos segun su id
DELIMITER //
CREATE PROCEDURE `sp_get_project_details_by_project_id`(
    IN p_id_project INT
)
BEGIN
    SELECT
        p.id_project,
        p.project_name,
        p.description AS "project_description",
        CONCAT(DATE_FORMAT(p.start_date, '%d-%m-%Y'), ' / ',DATE_FORMAT(p.end_date, '%d-%m-%Y')) AS "period_project",
        p.end_date AS "project_end_date",
        u.id_user AS "id_collaborator",
        u.user_name AS "collaborator_name",
        u.user_surname AS "collaborator_surname",
        u.url_photo AS "collaborator_url_photo",
        phc.id_project_role AS "id_project_role",
        pr.project_role_name AS "project_role_name"
    FROM project p
    INNER JOIN project_has_collaborator phc ON p.id_project = phc.id_project
    INNER JOIN user u ON phc.id_collaborator = u.id_user
    INNER JOIN project_role pr ON pr.id_project_role = phc.id_project_role
    WHERE p.active = 1 AND phc.active = 1
    AND p.id_project = p_id_project
    ORDER BY p.project_name ASC, p.creation_date ASC;
END //
DELIMITER ;

-- SP para actualizar la fecha de finalización por parte del leader
DELIMITER //
CREATE PROCEDURE `sp_update_end_date_leader`(
    IN p_id_project INT,
    IN p_end_date DATE
)
BEGIN
    -- Actualizando la tabla "project"
    UPDATE project
    SET end_date = p_end_date
    WHERE id_project = p_id_project;

    SELECT 'SUCCESS' AS 'message';
END //
DELIMITER ;

-- SP para ...
DELIMITER //
CREATE PROCEDURE `sp_search_collaborator_member`(
    IN p_id_project INT,
    IN p_collaborator_name VARCHAR(50)
)
BEGIN
    -- temporary_table_user_ids
     CREATE TEMPORARY TABLE temporary_table_user_ids (
        id INT
    );
    -- INSERTANDO LAS IDs en una tabla temporal
    INSERT INTO temporary_table_user_ids (id)
    SELECT u.id_user
    FROM project p
    INNER JOIN project_has_collaborator phc ON p.id_project = phc.id_project
    INNER JOIN user u ON phc.id_collaborator = u.id_user
    WHERE p.active = 1
    AND p.id_project = p_id_project;

    -- Seteando lo que se desea buscar con el formato más optimo
    SET @search_collaborator_name = UPPER(CONCAT('%',p_collaborator_name,'%'));
    -- Trayendo datos
    SELECT DISTINCT
        u.id_user AS "id_collaborator",
        u.user_name AS "collaborator_name",
        u.user_surname AS "collaborator_surname",
        u.url_photo AS "collaborator_url_photo"
    FROM project p
    INNER JOIN project_has_collaborator phc ON p.id_project = phc.id_project
    INNER JOIN user u ON phc.id_collaborator = u.id_user
    WHERE p.active = 1
    AND p.id_project != p_id_project
    AND u.id_user NOT IN (
        SELECT id
        FROM temporary_table_user_ids
    )
    AND u.user_name LIKE @search_collaborator_name
    ORDER BY u.user_name ASC, u.user_surname ASC;

    DROP TEMPORARY TABLE IF EXISTS temporary_table_user_ids;
END //
DELIMITER ;

-- Sp para la Agregar
DELIMITER //
CREATE PROCEDURE `sp_add_project_members`(
    IN p_id_project INT,
    IN p_collaborator_id_list VARCHAR(100)
)
BEGIN
    -- validación
    IF EXISTS (
        SELECT *
        FROM project
        WHERE id_project = p_id_project
        AND active = 1
    ) THEN
        -- Validando si el member ya existe en el proyecto
        IF EXISTS (
            SELECT *
            FROM project_has_collaborator
            WHERE id_project = p_id_project
            AND FIND_IN_SET(id_collaborator, p_collaborator_id_list)
            AND active = 1
        ) THEN
            SELECT 'SOME_COLLABORATORS_EXIST_IN_PROJECT' AS 'message';
        ELSE
            -- Insertar el ID extraído en la tabla temporal
            INSERT INTO project_has_collaborator (id_project, id_collaborator, id_project_role)
            SELECT p_id_project, id_collaborator, 'PMB'
            FROM collaborator 
            WHERE FIND_IN_SET(id_collaborator, p_collaborator_id_list);

            -- Mensaje de exito
            SELECT 'SUCCESS' AS 'message';
        END IF;
    ELSE
        SELECT 'PROJECT_NOT_EXISTS' AS 'message';
    END IF;
END //
DELIMITER ;

-- SP para la eliminación de un miembro de proyecto
DELIMITER //
CREATE PROCEDURE `sp_delete_project_member`(
    IN p_id_project_has_collaborator INT,
    IN p_id_leader INT
)
BEGIN
    SET @id_project = (
        SELECT id_project 
        FROM project_has_collaborator
        WHERE id_project_has_collaborator = p_id_project_has_collaborator
    );
    -- Validando si el usuario es el líder del proyecto
    IF EXISTS(
        SELECT *
        FROM project_has_collaborator
        WHERE id_project = @id_project 
        AND id_collaborator = @id_leader
        AND id_project_role = "PLD"
        AND active = 1
    ) THEN
        SELECT 'COLLABORATOR_IS_NOT_A_PLD' AS 'message';
    ELSEIF EXISTS(
        SELECT *
        FROM project_has_collaborator
        WHERE id_project = @id_project
        AND id_project_has_collaborator = p_id_project_has_collaborator
        AND id_collaborator = p_id_leader
    ) THEN
        SELECT 'PLD_CANNOT_DELETE_A_HIMSELF' AS 'message';
    ELSE 
        -- Desactivando el miembro del proyecto
        UPDATE project_has_collaborator
        SET active = 0, id_deleter = p_id_leader
        WHERE id_project_has_collaborator = p_id_project_has_collaborator;
        -- Cuando es exitoso
        SELECT 'SUCCESS' AS 'message';
    END IF;
END //
DELIMITER ;