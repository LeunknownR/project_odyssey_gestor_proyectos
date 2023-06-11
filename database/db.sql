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
    `state` ENUM('P', 'O', 'F') NOT NULL,  -- Pending - OnProgress - Finalized
    `checked` BIT NOT NULL,
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
    `id_deleter` INT UNSIGNED DEFAULT NULL,
    `id_project_role` CHAR(3) NOT NULL,
    PRIMARY KEY (`id_project_has_collaborator`),
    FOREIGN KEY (`id_project`) REFERENCES `project`(`id_project`),
    FOREIGN KEY (`id_collaborator`) REFERENCES `collaborator`(`id_collaborator`),
    FOREIGN KEY (`id_project_role`) REFERENCES `project_role`(`id_project_role`)
);

-- Tabla para guardar las subtareas de cada tarea
DROP TABLE IF EXISTS `task_priority`;
CREATE TABLE `task_priority` (
    `id_task_priority` INT UNSIGNED AUTO_INCREMENT,
    `task_priority_name` VARCHAR(30) NOT NULL,
    `url_image` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id_task_priority`)
);

INSERT INTO `task_priority`(`id_task_priority`, `task_priority_name`, `url_image`)
VALUES 
    (1, "low", "/task-priority-low.svg"),
    (2, "medium", "/task-priority-med.svg"),
    (3, "high", "/task-priority-high.svg");

-- Tabla para guardar las tareas
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
    `id_task` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `task_name` VARCHAR(40) NOT NULL,
    `description` VARCHAR(200),  -- task_description 
    `deadline` DATE,
    `state` ENUM('P', 'O', 'F') NOT NULL,  -- Pending - OnProgress - Finalized
    `checked` BIT NOT NULL DEFAULT 0,
    `id_task_priority` INT UNSIGNED NULL,
    `id_project` INT UNSIGNED NOT NULL,
    `id_responsible` INT UNSIGNED NULL,
    PRIMARY KEY (`id_task`),
    FOREIGN KEY (`id_task_priority`) REFERENCES `task_priority`(`id_task_priority`),
    FOREIGN KEY (`id_project`) REFERENCES `project`(`id_project`),
    FOREIGN KEY (`id_responsible`) REFERENCES `collaborator`(`id_collaborator`)
);

-- Tabla para guardar las subtareas de cada tarea
DROP TABLE IF EXISTS `subtask`;
CREATE TABLE `subtask` (
    `id_subtask` INT UNSIGNED AUTO_INCREMENT,
    `subtask_name` VARCHAR(50) NOT NULL,
    `checked` BIT NOT NULL DEFAULT 0,
    `id_task` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id_subtask`),
    FOREIGN KEY (`id_task`) REFERENCES `task`(`id_task`)
);

-- Tabla para guardar el comentario de cada tarea
DROP TABLE IF EXISTS `task_comment`;
CREATE TABLE `task_comment` (
    `id_task_comment` INT UNSIGNED AUTO_INCREMENT,
    `comment_content` VARCHAR(200) NOT NULL,
    `comment_date` DATETIME NOT NULL,
    `id_task` INT UNSIGNED NOT NULL,
    `id_collaborator` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id_task_comment`),
    FOREIGN KEY (`id_task`) REFERENCES `task`(`id_task`),
    FOREIGN KEY (`id_collaborator`) REFERENCES `collaborator`(`id_collaborator`)
);

-- --- [ INSERT INTO ] ------------------------------------------------------------
-- Insertando datos en la tabla user 
INSERT INTO `user` (`id_user`, `user_name`, `user_surname`, `username`, `userpassword`, `url_photo`, `email`, `id_role`) 
VALUES
    (1, 'Diego Edgardo', 'Torres De La Cruz', 'diegot', '$2a$10$5lDSbUyMEVZbfPFRiYuemesPnHyfdzCyRGoFJNDVpmuhmcFy5Soxe', '/makanaky.jpg', 'diegoteodosiof@gmail.com', 'GAD'),
    (2, 'Manuel Alejandro', 'Rivera Becerra', 'manuelr', '$2a$10$FOuqRzBR7drrXGku/hvJAunSKwNzFBxd.0HvL847iazSnLqftCuyG', "/csm.jpg", 'leunknownr@gmail.com', 'CLB'),
    (3, 'Ralf Carsten', 'Carrasco Stein', 'ralfc', '$2a$10$yhW0eomyv23YbJTx.FG4keIKdmVi4HS9PEoZ5SMtJhRRLYhZFFi8a', '/fotoderal.jpg', 'ralfcarrasco@gmail.com', 'CLB'),
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

INSERT INTO `task`(id_task, task_name, description, deadline, state, checked, id_task_priority, id_project, id_responsible)
VALUES 
    (1, "db | Stored procedures 'sprint-2'", "Desarrollo de Sotored procedures por parte del DBA, 'osea yo',  para los servicios REST del sprint 2", "2023-05-17", "F", 0, 3, 1, 3),
    (2, "backend | new logict with POO 'sprint-2'", "Description example backend", "2023-05-12", "O", 0, 1, 1, 2),
    (3, "frontend | dev responsive design to mobile 'sprint-2'", "Description example frontend", "2023-05-15", "O", 0, 1, 1, 5),
    (4, "frontend | task example 'sprint-2'", "Description example frontend", "2023-05-20", "P", 0, 1, 1, 5),
    (5, "backend | task example 'sprint-2'", "Description example backend", "2023-05-21", "P", 0, 1, 1, 2),
    (6, "db | task example 'sprint-2'", "Description example db", "2023-05-23", "O", 0, 1, 1, 2);

INSERT INTO `subtask`(id_subtask, subtask_name, checked, id_task)
VALUES 
    (1, "Analisis del CRUD task", 0, 1),
    (2, "sp_1 - 'sp_create_task'", 0, 1),
    (3, "sp_2 - 'sp_update_task'", 0, 1),
    (4, "sp_3 - 'sp_delete_task'", 0, 1);

INSERT INTO `task_comment`(id_task_comment, comment_content, comment_date, id_task, id_collaborator)
VALUES 
    (1, "oe mano esta mal la subtarea", NOW(), 1, 2),
    (2, "skueretriste mano", NOW(), 1, 3);


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
CREATE PROCEDURE `sp_get_project_list_for_general_admin`(
    IN p_project_name VARCHAR(50)
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
        p.end_date AS "project_end_date",
        u.id_user AS "id_collaborator",
        u.user_name AS "collaborator_name",
        u.user_surname AS "collaborator_surname",
        u.url_photo AS "collaborator_url_photo",
        u.email AS "collaborator_email",
        phc.id_project_role AS "id_project_role",
        (
			SELECT COUNT(*) 
            FROM project_has_collaborator
            WHERE id_project = p.id_project
            AND id_project_role = "PMB" AND active = 1
		) AS "project_member_count"
    FROM project p
    INNER JOIN project_has_collaborator phc ON p.id_project = phc.id_project
    INNER JOIN user u ON phc.id_collaborator = u.id_user
    WHERE p.active = 1
    AND phc.id_project_role = "PLD"
    AND phc.active = 1
    AND (@search_project_name IS NULL OR p.project_name LIKE @search_project_name)
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
        u.user_name as "name",
        u.user_surname as "surname",
        u.url_photo as "url_photo",
        u.email
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
        AND id_project_role = "PLD"
        AND active = 1
    );
    -- Actualizando la tabla "project"
    UPDATE project
    SET project_name = p_project_name,
        description = p_project_description,
        start_date = p_project_start_date,
        end_date = p_project_end_date
    WHERE id_project = p_id_project;
    -- Actualizando la tabla "project_has_collaborator"
    IF EXISTS(
        SELECT id_project_has_collaborator
        FROM project_has_collaborator
        WHERE id_project = p_id_project
        AND id_collaborator = p_id_collaborator
        AND id_project_role = "PLD"
        AND active = 1
    ) THEN
        SELECT 'SUCCESS' AS 'MESSAGE';
    ELSE
        -- Cambiando el anterior id_collaborator
        UPDATE project_has_collaborator
        SET active = 0
        WHERE id_project_has_collaborator = @id_project_has_collaborator;
        IF EXISTS(
            SELECT id_collaborator
            FROM project_has_collaborator
            WHERE id_project = p_id_project
            AND id_collaborator = p_id_collaborator
            AND id_project_role = "PMB"
            AND active = 1
        ) THEN
            -- Cambiando al nuevo id_collaborator
            -- ASCENDIÉNDOLO
            UPDATE project_has_collaborator
            SET id_project_role = "PLD"
            WHERE id_project = p_id_project
            AND id_collaborator = p_id_collaborator;
        ELSE
            INSERT INTO project_has_collaborator(
                id_project,
                id_collaborator,
                id_project_role
            )
            VALUES (
                p_id_project,
                p_id_collaborator,
                "PLD"
            );
        END IF;
        SELECT 'SUCCESS' AS 'MESSAGE';
    END IF;
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
    AND (@search_project_name IS NULL OR p.project_name LIKE @search_project_name)
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
        p.state AS "project_state",
        u.id_user AS "id_collaborator",
        u.user_name AS "collaborator_name",
        u.user_surname AS "collaborator_surname",
        u.url_photo AS "collaborator_url_photo",
        u.email AS "collaborator_email",
        phc.id_project_has_collaborator AS "collaborator_id_project_has_collaborator",
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
    WHERE p.active = 1 AND phc.active = 1
    AND p.id_project = p_id_project;

    -- Seteando lo que se desea buscar con el formato más optimo
    SET @search_collaborator_name = UPPER(CONCAT('%',p_collaborator_name,'%'));
    -- Trayendo datos
    SELECT DISTINCT
        u.id_user AS "id_collaborator",
        u.user_name AS "name",
        u.user_surname AS "surname",
        u.url_photo AS "url_photo",
        u.email
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



-- new sp sprint 2

-- SP para traer el detalle de un colaborador de proyecto
DELIMITER //
CREATE PROCEDURE `sp_get_project_panel_details`(
    IN p_id_project INT,
    IN p_id_user INT
)
BEGIN
    SELECT
        p.id_project,
        p.project_name,
        p.state AS "project_state",
        phc.id_project_role
    FROM project p
    INNER JOIN project_has_collaborator phc ON p.id_project = phc.id_project
    INNER JOIN user u ON phc.id_collaborator = u.id_user
    WHERE p.id_project = p_id_project
    AND phc.id_collaborator = p_id_user;
END //
DELIMITER ;

-- SP para traer las imagenes de las prioridades
DELIMITER //
CREATE PROCEDURE `sp_get_task_priorities`()
BEGIN
    SELECT 
        id_task_priority,
        url_image
    FROM task_priority;
END //
DELIMITER ;

-- Sp para listar la información de la task_board
DELIMITER //
CREATE PROCEDURE `sp_get_project_task_board`(
    IN p_id_project INT
)
BEGIN
    SELECT 
        t.id_task,
        t.task_name,
        t.description AS "task_description",
        t.state AS "task_state",
        t.checked AS "task_checked",
        t.id_responsible,
        urt.user_name AS "responsible_name",
        urt.user_surname AS "responsible_surname",
        urt.url_photo AS "responsible_url_photo",
        t.id_task_priority,
        t.deadline AS "task_deadline",
        st.id_subtask,
        st.subtask_name,
        st.checked AS "subtask_checked",
        tc.id_task_comment,
        tc.comment_content AS "task_comment_content",
        tc.comment_date AS "task_comment_datetime",
        tc.id_collaborator AS "id_task_comment_collaborator",
        utc.user_name AS "task_comment_collaborator_name",
        utc.user_surname AS "task_comment_collaborator_surname",
        utc.url_photo AS "task_comment_collaborator_url_photo"
    FROM task t
    LEFT JOIN user urt ON t.id_responsible = urt.id_user
    LEFT JOIN subtask st ON t.id_task = st.id_task
    LEFT JOIN task_comment tc ON t.id_task = tc.id_task
    LEFT JOIN user utc ON tc.id_collaborator = utc.id_user
    WHERE t.id_project = p_id_project;
END //
DELIMITER ;

-- SP para traer las imagenes de las prioridades
DELIMITER //
CREATE PROCEDURE `sp_create_task`(
    IN p_id_project INT,
    IN p_task_name VARCHAR(40),
    IN p_task_state CHAR(1),
    IN p_id_collaborator INT
)
BEGIN
    -- Validando si el collab existe en el proyecto
    IF NOT EXISTS(
        SELECT id_collaborator
        FROM project_has_collaborator
        WHERE id_project = p_id_project
        AND id_collaborator = p_id_collaborator
    ) THEN
        -- Cuando el colaborador no está dentro del proyecto.
        SELECT 'COLLAB_IS_NOT_IN_PROJECT' AS 'message';
    ELSE
        IF (UPPER(p_task_state) = "F") THEN
            SET @checked = 1;
        ELSE
            SET @checked = 0;
        END IF;

        -- Creando tarea basica
        INSERT INTO task(
            task_name,
            state,
            checked,
            id_project
        ) VALUES (
            p_task_name,
            p_task_state,
            @checked,
            p_id_project
        );
        SET @id_task = LAST_INSERT_ID();

        -- Verificando si el colaborador es miembro
        IF EXISTS(
            SELECT id_project_role
            FROM project_has_collaborator
            WHERE id_collaborator = p_id_collaborator
            AND id_project = p_id_project
            AND id_project_role = "PMB"
        ) THEN
            -- Seteandole la tarea al miembro
            UPDATE task
            SET id_responsible = p_id_collaborator
            WHERE id_task = @id_task;
        END IF;

        -- Cuando la creación de la tarea es exitosa.
        SELECT 'SUCCESS' AS 'message';
    END IF;
END //
DELIMITER ;

-- sp_update_task(
-- 		p_id_project,
-- 		p_id_responsible,
-- 		p_task_name,
-- 		p_description,
-- 		p_deadline,
-- 		p_id_priority,
-- 		p_new_subtask_list,
-- 		p_subtask_id_list_to_be_deleted,
--      p_id_collaborator
-- );

-- SP para actualizar una tarea
-- DELIMITER //
-- CREATE PROCEDURE `sp_update_task`(
--     IN p_id_task INT,
--     IN p_id_responsible INT,
--     IN p_task_name VARCHAR(40),
--     IN p_description VARCHAR(200),
--     IN p_deadline DATE,
--     IN p_id_task_priority INT,
--     IN p_new_subtask_list VARCHAR(100),
--     IN p_subtask_id_list_to_be_deleted VARCHAR(100),
--     IN p_id_collaborator INT
-- )
-- BEGIN
--     -- Validando si el collab existe en el proyecto
--     IF NOT EXISTS(
--         SELECT id_collaborator
--         FROM project_has_collaborator
--         WHERE id_project = p_id_project
--         AND id_collaborator = p_id_collaborator
--     ) THEN
--         -- Cuando el colaborador no está dentro del proyecto.
--         SELECT 'COLLAB_IS_NOT_IN_PROJECT' AS 'message';
--     ELSE
--         IF NOT EXISTS (
--             SELECT id_responsible
--             FROM task
--             WHERE id_task = p_id_task
--             AND id_responsible = p_id_collaborator
--         ) THEN
--             -- Cuando el colaborador es miembro del proyecto y no es su tarea.
--             SELECT 'COLLAB_IS_PMB_AND_TASK_IS_NOT_HIM' AS 'message';
--         ELSE
--             -- Actualizando la tarea
--             UPDATE task
--             SET id_responsible = p_id_responsible,
--                 task_name = p_task_name,
--                 description = p_description,
--                 deadline = p_deadline,
--                 id_task_priority = p_id_task_priority,
--                 id_responsible = p_id_collaborator
--             WHERE id_project = p_id_project
--             AND id_task = @id_task;

--             -- nuevas subtasks
--             IF NOT EXISTS(
--                 SELECT id_subtask
--                 FROM subtask
--                 WHERE id_task = p_id_task
--                 AND FIND_IN_SET(id_subtask, p_new_subtask_list)
--             ) THEN
--                 -- nuevas subtasks
--                 CREATE TEMPORARY TABLE temporary_new_subtask_list (
--                     id INT
--                 );
--                 -- INSERTANDO LAS IDs en una tabla temporal
--                 INSERT INTO temporary_new_subtask_list (id)
--                 SELECT id_subtask
--                 FROM subtask
--                 WHERE id_task = p_id_task
--                 AND FIND_IN_SET(id_subtask, p_new_subtask_list)
--             END IF;

--             -- eliminando subtasks
--             IF EXISTS(
--                 SELECT id_subtask
--                 FROM subtask
--                 WHERE id_task = p_id_task
--                 AND FIND_IN_SET(id_subtask, p_subtask_id_list_to_be_deleted)
--             ) THEN
--                 -- Eliminando la tarea
--                 DELETE FROM subtask
--                 WHERE id_task = p_id_task
--                 AND FIND_IN_SET(id_subtask, p_subtask_id_list_to_be_deleted);
--             END IF;

--             -- Eliminando la tabla temporal
--             DROP TEMPORARY TABLE IF EXISTS temporary_new_subtask_list;

--             -- Cuando la creación de la tarea es exitosa.
--             SELECT 'SUCCESS' AS 'message';
--         END IF;
--     END IF;
-- END //
-- DELIMITER ;


-- SP para eliminar una tarea
DELIMITER //
CREATE PROCEDURE `sp_delete_task`(
    IN p_id_project INT,
    IN p_id_task_to_be_deleted INT,
    IN p_id_collaborator INT
)
BEGIN
    -- Validando si el collab existe en el proyecto
    IF NOT EXISTS(
        SELECT id_collaborator
        FROM project_has_collaborator
        WHERE id_project = p_id_project
        AND id_collaborator = p_id_collaborator
    ) THEN
        -- Cuando el colaborador no está dentro del proyecto.
        SELECT 'COLLAB_IS_NOT_IN_PROJECT' AS 'message';
    ELSE
        IF EXISTS (
            SELECT *
            FROM project_has_collaborator phc 
            INNER JOIN task t
            ON phc.id_project = t.id_project
            WHERE t.id_task = p_id_task_to_be_deleted
            AND phc.id_collaborator = p_id_collaborator 
            AND phc.id_project_role = "PMB"
            AND (t.id_responsible != p_id_collaborator OR t.id_responsible IS NULL)
        ) THEN
            -- Cuando el colaborador es miembro del proyecto y no es su tarea.
            SELECT 'COLLAB_IS_PMB_AND_TASK_IS_NOT_HIM' AS 'message';
        ELSE
            -- Eliminando la tarea
            DELETE FROM task
            WHERE id_task = p_id_task_to_be_deleted;
            -- Cuando la creación de la tarea es exitosa.
            SELECT 'SUCCESS' AS 'message';
        END IF;
    END IF;
END //
DELIMITER ;

-- SP para crear un comentario
DELIMITER //
CREATE PROCEDURE `sp_comment_in_task`(
    IN p_id_project INT,
    IN p_id_task INT,
    IN p_comment VARCHAR(200),
    IN p_id_collaborator INT
)
BEGIN
    -- Validando si el collab existe en el proyecto
    IF NOT EXISTS(
        SELECT id_collaborator
        FROM project_has_collaborator
        WHERE id_project = p_id_project
        AND id_collaborator = p_id_collaborator
    ) THEN
        -- Cuando el colaborador no está dentro del proyecto.
        SELECT 'COLLAB_IS_NOT_IN_PROJECT' AS 'message';
    ELSE
        -- Insertando el nuevo comentario
        INSERT INTO task_comment(
            comment_content, 
            comment_date, 
            id_task, 
            id_collaborator
        ) VALUES (
            p_comment,
            NOW(),
            p_id_task,
            p_id_collaborator
        );
        -- Cuando la creación de la tarea es exitosa.
        SELECT 'SUCCESS' AS 'message';
    END IF;
END //
DELIMITER ;