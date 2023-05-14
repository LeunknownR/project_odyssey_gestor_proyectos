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
INSERT INTO `user` (`id_user`, `user_name`, `user_surname`, `username`, `userpassword`, `url_photo`, `email`, `id_role`) 
VALUES
    (1, 'Diego Edgardo', 'Torres De La Cruz', 'diegot', 'password', '/diegot.jpg', 'diegoteodosiof@gmail.com', 'GAD'),
    (2, 'Manuel Alejandro', 'Rivera Becerra', 'manuelr', 'password', '/manuelr.jpg', 'leunknownr@gmail.com', 'CLB'),
    (3, 'Ralf Carsten', 'Carrasco Stein', 'ralfc', 'password', '/ralfc.jpg', 'ralfcarrasco@gmail.com', 'CLB'),
    (4, 'John', 'Doe', 'johndoe', 'password', '/johndoe.jpg', 'johndoe@example.com', 'CLB'),
    (5, 'Jane', 'Doe', 'janedoe', 'password', '/janedoe.jpg', 'janedoe@example.com', 'CLB'),
    (6, 'Alice', 'Smith', 'alicesmith', 'password', '/alicesmith.jpg', 'alicesmith@example.com', 'CLB'),
    (7, 'Bob', 'Johnson', 'bobjohnson', 'password', '/bobjohnson.jpg', 'bobjohnson@example.com', 'CLB'),
    (8, 'Maria', 'Garcia', 'mariagarcia', 'password', '/mariagarcia.jpg', 'mariagarcia@example.com', 'CLB'),
    (9, 'Jose', 'Martinez', 'josemartinez', 'password', '/josemartinez.jpg', 'josemartinez@example.com', 'CLB'),
    (10, 'Amanda', 'Brown', 'amandabrown', 'password', '/amandabrown.jpg', 'amandabrown@example.com', 'CLB'),
    (11, 'Matthew', 'Davis', 'matthewdavis', 'password', '/matthewdavis.jpg', 'matthewdavis@example.com', 'CLB'),
    (12, 'Ashley', 'Wilson', 'ashleywilson', 'password', '/ashleywilson.jpg', 'ashleywilson@example.com', 'CLB'),
    (13, 'Michael', 'Anderson', 'michaelanderson', 'password', '/michaelanderson.jpg', 'michaelanderson@example.com', 'CLB'),
    (14, 'Linda', 'Gonzalez', 'lindagonzalez', 'password', '/lindagonzalez.jpg', 'lindagonzalez@example.com', 'CLB'),
    (15, 'David', 'Taylor', 'davidtaylor', 'password', '/davidtaylor.jpg', 'davidtaylor@example.com', 'CLB'),
    (16, 'Sarah', 'Lee', 'sarahlee', 'password', '/sarahlee.jpg', 'sarahlee@example.com', 'CLB'),
    (17, 'Daniel', 'Martin', 'danielmartin', 'password', '/danielmartin.jpg', 'danielmartin@example.com', 'CLB'),
    (18, 'Emily', 'Clark', 'emilyclark', 'password', '/emilyclark.jpg', 'emilyclark@example.com', 'CLB'),
    (19, 'Christopher', 'Rodriguez', 'christopherrodriguez', 'password', '/christopherrodriguez.jpg', 'christopherrodriguez@example.com', 'CLB');


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
    (9);

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

INSERT INTO `members_project` (`id_project`, `id_collaborator`, `id_project_role`) 
VALUES
    (1, 2, 'PLD'),
    (1, 3, 'PMB'),
    (1, 5, 'PMB'),
    (2, 7, 'PMB'),
    (2, 4, 'PMB'),
    (2, 5, 'PLD'),
    (3, 2, 'PMB'),
    (3, 3, 'PLD'),
    (3, 6, 'PMB'),
    (4, 7, 'PLD'),
    (4, 3, 'PMB'),
    (4, 5, 'PMB');

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

-- SP para 
-- DELIMITER //
-- CREATE PROCEDURE `sp_get_project_list_by_project_name`(
--     IN p_project_name VARCHAR(50),
--     IN p_recents BIT
-- )
-- BEGIN
--     SET @recents_projects = 5;
--     -- Validando los más recientes
--     IF (p_recents = 1) THEN
--         SET @recents_projects = 3;
--     END IF;

--     -- Seteando lo que se desea buscar con el formato más optimo
--     SET @search_project_name = UPPER(CONCAT('%',p_project_name,'%'));

--     -- Consulta para traer los datos
--     SELECT 
--         p.id_project,
--         p.project_name,
--         p.description,
--         p.state,
--         p.start_date,
--         p.end_date,
--         u.user_name,
--         u.user_surname,
--         u.email,
--         u.url_photo,
--         mmr.id_project_role
--     FROM project p
--     INNER JOIN members_project mmr ON p.id_project = mmr.id_project
--     INNER JOIN user u ON mmr.id_collaborator = u.id_user
--     WHERE p.active = 1
--     AND mmr.id_project_role = "PLD"
--     AND p.project_name LIKE @search_project_name
--     ORDER BY p.creation_date ASC, p.project_name ASC
--     LIMIT @recents_projects;

-- END //
-- DELIMITER ;

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
DELIMITER //
CREATE PROCEDURE `sp_get_project_details_by_project_id`(
    IN p_id_project INT
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
        mmr.id_project_role
    FROM project p
    INNER JOIN members_project mmr ON p.id_project = mmr.id_project
    INNER JOIN user u ON mmr.id_collaborator = u.id_user
    WHERE p.active = 1
    AND p.id_project = id_project
    ORDER BY p.project_name ASC, p.creation_date ASC;
DELIMITER ;

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
--     -- Para
--     UPDATE project
--     SET project_name = p_project_name,
--         description = p_project_description,
--         start_date = p_project_start_date,
--         end_date = p_project_end_date,
--         id_collaborator = p_id_collaborator
--     WHERE id_project = p_id_project


-- END //
-- DELIMITER ;