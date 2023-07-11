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
    `checked` BIT NOT NULL DEFAULT 0,
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
DROP TABLE IF EXISTS `project_team_member`;
CREATE TABLE `project_team_member` (
    `id_project_team_member` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `id_project` INT UNSIGNED NOT NULL,
    `id_collaborator` INT UNSIGNED NOT NULL,
    `active` BIT NOT NULL DEFAULT 1,
    `id_deleter` INT UNSIGNED DEFAULT NULL,
    `id_project_role` CHAR(3) NOT NULL,
    PRIMARY KEY (`id_project_team_member`),
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
    `task_name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(200),  -- task_description 
    `deadline` DATE,
    `state` ENUM('P', 'O', 'F') NOT NULL,  -- Pending - OnProgress - Finalized
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

-- Tabla para guardar los mensajes para el chat privado
DROP TABLE IF EXISTS `private_chat_message`;
CREATE TABLE `private_chat_message` (
    `id_private_chat_message` INT UNSIGNED AUTO_INCREMENT,
    `message` VARCHAR(500) NOT NULL,
    `datetime` DATETIME NOT NULL,
    `seen` BIT NOT NULL DEFAULT 0,
    `id_collaborator_sender` INT UNSIGNED NOT NULL,
    `id_collaborator_receiver` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id_private_chat_message`),
    FOREIGN KEY (`id_collaborator_sender`) REFERENCES `collaborator`(`id_collaborator`),
    FOREIGN KEY (`id_collaborator_receiver`) REFERENCES `collaborator`(`id_collaborator`)
);

-- Tabla para guardar los mensajes para el chat del proyecto
DROP TABLE IF EXISTS `project_chat_message`;
CREATE TABLE `project_chat_message` (
    `id_project_chat_message` INT UNSIGNED AUTO_INCREMENT,
    `message` VARCHAR(500) NOT NULL,
    `datetime` DATETIME NOT NULL,
    `id_project_team_member_sender` INT UNSIGNED NOT NULL,
    `id_project` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id_project_chat_message`),
    FOREIGN KEY (`id_project`) REFERENCES `project`(`id_project`),
    FOREIGN KEY (`id_project_team_member_sender`) REFERENCES `project_team_member`(`id_project_team_member`)
);

-- Tabla para guardar si estan vistos los mensajes para el chat del proyecto
DROP TABLE IF EXISTS `project_team_member_seen_message`;
CREATE TABLE `project_team_member_seen_message` (
    `id_project_team_member_seen_message` INT UNSIGNED AUTO_INCREMENT,
    `seen` BIT NOT NULL DEFAULT 0,
    `id_project_team_member` INT UNSIGNED NOT NULL,
    `id_project_chat_message` INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id_project_team_member_seen_message`),
    FOREIGN KEY (`id_project_team_member`) REFERENCES `project_team_member`(`id_project_team_member`),
    FOREIGN KEY (`id_project_chat_message`) REFERENCES `project_chat_message`(`id_project_chat_message`)
);


-- --- [ TRIGERs ] ------------------------------------------------------------

-- -- Triger para insertar datos cuando se envia un mensaje
DELIMITER //
CREATE TRIGGER trg_insert_project_chat_message
AFTER INSERT ON project_chat_message
FOR EACH ROW
BEGIN
    INSERT INTO project_team_member_seen_message (
        id_project_team_member, 
        id_project_chat_message
    )
    SELECT 
        ptm.id_project_team_member, 
        NEW.id_project_chat_message
    FROM project_team_member ptm
    WHERE ptm.id_project = NEW.id_project 
        AND ptm.id_project_team_member != NEW.id_project_team_member_sender;
END //
DELIMITER ;

-- --- [ INSERT INTO ] ------------------------------------------------------------
-- Insertando datos en la tabla user 
INSERT INTO `user` (`id_user`, `user_name`, `user_surname`, `username`, `userpassword`, `url_photo`, `email`, `id_role`) 
VALUES
    (1, 'Diego Edgardo', 'Torres De La Cruz', 'diegot', '$2a$10$5lDSbUyMEVZbfPFRiYuemesPnHyfdzCyRGoFJNDVpmuhmcFy5Soxe', '/makanaky.jpg', 'diegoteodosiof@gmail.com', 'GAD'),
    (2, 'Manuel Alejandro', 'Rivera Becerra', 'manuelr', '$2a$10$FOuqRzBR7drrXGku/hvJAunSKwNzFBxd.0HvL847iazSnLqftCuyG', "/csm.jpg", 'leunknownr@gmail.com', 'CLB'),
    (3, 'Ralf Carsten', 'Carrasco Stein', 'ralfc', '$2a$10$yhW0eomyv23YbJTx.FG4keIKdmVi4HS9PEoZ5SMtJhRRLYhZFFi8a', '/fotoderal.jpg', 'ralfcarrasco@gmail.com', 'CLB'),
    (4, 'Alexis Valentin', 'Dulanto Arias', 'alexisd', '$2a$10$eCqOhlQbA1C0JJsMZKLH..Zk2Obrt.RAmKtbhiAsUabRUUfZD5qwq', NULL, 'alexisdulanto@example.com', 'CLB'),
    (5, 'Nikcol Anayeli', 'Uribe Huamani', 'nikcolu', '$2a$12$oh40b.aGfANMO7PKjGYDaeqdSbVPEr6QtlQBhQFq/RG8WBs2PhVZO', NULL, 'nikcoluribe@example.com', 'CLB'),
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

INSERT INTO `project_team_member` (`id_project_team_member`, `id_project`, `id_collaborator`, `id_project_role`) 
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

INSERT INTO `task`(`id_task`, `task_name`, `description`, `deadline`, `state`, `id_task_priority`, `id_project`, `id_responsible`)
VALUES 
    (1, 'db | Stored procedures "sprint-2"', 'Desarrollo de Sotored procedures por parte del DBA, "osea yo",  para los servicios REST del sprint 2', '2023-05-17', 'F', 3, 1, 3),
    (2, 'backend | new logict with POO "sprint-2"', "Description example backend", '2023-05-12', 'O', 1, 1, 2),
    (3, 'frontend | dev responsive design to mobile "sprint-2"', 'Description example frontend', '2023-05-15', 'O', 1, 1, 5),
    (4, 'frontend | task example "sprint-2"', 'Description example frontend', '2023-05-20', 'P', 1, 1, 5),
    (5, 'backend | task example "sprint-2"', 'Description example backend', '2023-05-21', 'P', 1, 1, 2),
    (6, 'db | task example "sprint-2"', 'Description example db', '2023-05-23', 'O', 1, 1, 2);

INSERT INTO `subtask`(`id_subtask`, `subtask_name`, `checked`, `id_task`)
VALUES
    (1, 'Analisis del CRUD task', 0, 1),
    (2, 'sp_1 - "sp_create_task"', 0, 1),
    (3, 'sp_2 - "sp_update_task"', 0, 1),
    (4, 'sp_3 - "sp_delete_task"', 0, 1);

INSERT INTO `task_comment`(`id_task_comment`, `comment_content`, `comment_date`, `id_task`, `id_collaborator`)
VALUES 
    (1, 'oe mano esta mal la subtarea', NOW(), 1, 2),
    (2, 'skueretriste mano', NOW(), 1, 3);

INSERT INTO `private_chat_message` (`id_private_chat_message`, `message`, `datetime`, `seen`, `id_collaborator_sender`, `id_collaborator_receiver`)
VALUES 
    (1,'Hola, como estas?', '2023-06-27 20:38:40', 1, 2, 3),
    (2,'Bien y tu?', '2023-06-27 20:45:02', 0, 3, 2),
    (3,'Hola soy SEO de CompanyPeru quieres ser tu propio jefe?', '2023-06-27 20:39:02', 0, 4, 5),
    (4,'Hola manuel...', '2023-06-27 20:41:00', 0, 5, 2),
    (5,'Pues todo piola', '2023-06-27 20:46:02', 0, 3, 2),
    (6,'Ya hiciste el trabajo que dejaron para ingenieria de procesos?', '2023-06-27 20:46:20', 0, 3, 2);

-- --- [ FUNCTIONs ] ------------------------------------------------------------

-- Funcion para validar si el id_collabortor existe en el project
DELIMITER //
CREATE FUNCTION check_collaborator_exists(
    p_id_project INT,
    p_id_collaborator INT
) RETURNS BOOLEAN
BEGIN
    DECLARE result BOOLEAN;
    
    SET result = EXISTS (
        SELECT id_collaborator
        FROM project_team_member
        WHERE id_project = p_id_project
        AND id_collaborator = p_id_collaborator
    );
    
    RETURN result;
END //
DELIMITER ;

-- Función para
DELIMITER //
CREATE FUNCTION check_task_is_not_him(
    p_id_task INT,
    p_id_collaborator INT
) RETURNS BOOLEAN
BEGIN
    DECLARE task_is_not_him BOOLEAN;

    SET task_is_not_him = EXISTS (
        SELECT *
        FROM project_team_member ptm
        INNER JOIN task t ON ptm.id_project = t.id_project
        WHERE t.id_task = p_id_task
        AND ptm.id_collaborator = p_id_collaborator
        AND ptm.id_project_role = 'PMB'
        AND (t.id_responsible != p_id_collaborator OR t.id_responsible IS NULL)
    );

    RETURN task_is_not_him;
END //
DELIMITER ;



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
        ptm.id_project_role AS "id_project_role",
        (
			SELECT COUNT(*) 
            FROM project_team_member
            WHERE id_project = p.id_project
            AND id_project_role = "PMB" AND active = 1
		) AS "project_member_count"
    FROM project p
    INNER JOIN project_team_member ptm ON p.id_project = ptm.id_project
    INNER JOIN user u ON ptm.id_collaborator = u.id_user
    WHERE p.active = 1
    AND ptm.id_project_role = "PLD"
    AND ptm.active = 1
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
    INSERT INTO project_team_member (
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
    -- Extrayendo el id_project_team_member segun el id_project y si es PLD
    SET @id_project_team_member = (
        SELECT id_project_team_member
        FROM project_team_member
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
    -- Actualizando la tabla "project_team_member"
    IF EXISTS(
        SELECT id_project_team_member
        FROM project_team_member
        WHERE id_project = p_id_project
        AND id_collaborator = p_id_collaborator
        AND id_project_role = "PLD"
        AND active = 1
    ) THEN
        SELECT 'SUCCESS' AS 'MESSAGE';
    ELSE
        -- Cambiando el anterior id_collaborator
        UPDATE project_team_member
        SET active = 0
        WHERE id_project_team_member = @id_project_team_member;
        IF EXISTS(
            SELECT id_collaborator
            FROM project_team_member
            WHERE id_project = p_id_project
            AND id_collaborator = p_id_collaborator
            AND id_project_role = "PMB"
            AND active = 1
        ) THEN
            -- Cambiando al nuevo id_collaborator
            -- ASCENDIÉNDOLO
            UPDATE project_team_member
            SET id_project_role = "PLD"
            WHERE id_project = p_id_project
            AND id_collaborator = p_id_collaborator;
        ELSE
            INSERT INTO project_team_member(
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
    INNER JOIN project_team_member ptm ON p.id_project = ptm.id_project
    INNER JOIN user u ON ptm.id_collaborator = u.id_user
    WHERE p.active = 1
    AND ptm.id_collaborator = p_id_collaborator
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
        ptm.id_project_team_member AS "id_project_team_member",
        u.user_name AS "collaborator_name",
        u.user_surname AS "collaborator_surname",
        u.url_photo AS "collaborator_url_photo",
        u.email AS "collaborator_email",
        ptm.id_project_role AS "id_project_role",
        pr.project_role_name AS "project_role_name"
    FROM project p
    INNER JOIN project_team_member ptm ON p.id_project = ptm.id_project
    INNER JOIN user u ON ptm.id_collaborator = u.id_user
    INNER JOIN project_role pr ON pr.id_project_role = ptm.id_project_role
    WHERE p.active = 1 AND ptm.active = 1
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
    INNER JOIN project_team_member ptm ON p.id_project = ptm.id_project
    INNER JOIN user u ON ptm.id_collaborator = u.id_user
    WHERE p.active = 1 AND ptm.active = 1
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
    INNER JOIN project_team_member ptm ON p.id_project = ptm.id_project
    INNER JOIN user u ON ptm.id_collaborator = u.id_user
    WHERE p.active = 1
    AND p.id_project != p_id_project
    AND u.id_user NOT IN (
        SELECT id
        FROM temporary_table_user_ids
    )
    AND UPPER(CONCAT(u.user_name, ' ', u.user_surname)) LIKE @search_collaborator_name
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
            FROM project_team_member
            WHERE id_project = p_id_project
            AND FIND_IN_SET(id_collaborator, p_collaborator_id_list)
            AND active = 1
        ) THEN
            SELECT 'SOME_COLLABORATORS_EXIST_IN_PROJECT' AS 'message';
        ELSE
            -- Insertar el ID extraído en la tabla temporal
            INSERT INTO project_team_member (id_project, id_collaborator, id_project_role)
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
    IN p_id_project_team_member INT,
    IN p_id_leader INT
)
BEGIN
    SET @id_project = (
        SELECT id_project 
        FROM project_team_member
        WHERE id_project_team_member = p_id_project_team_member
    );
    -- Validando si el usuario es el líder del proyecto
    IF EXISTS(
        SELECT *
        FROM project_team_member
        WHERE id_project = @id_project 
        AND id_collaborator = @id_leader
        AND id_project_role = "PLD"
        AND active = 1
    ) THEN
        SELECT 'COLLABORATOR_IS_NOT_A_PLD' AS 'message';
    ELSEIF EXISTS(
        SELECT *
        FROM project_team_member
        WHERE id_project = @id_project
        AND id_project_team_member = p_id_project_team_member
        AND id_collaborator = p_id_leader
    ) THEN
        SELECT 'PLD_CANNOT_DELETE_A_HIMSELF' AS 'message';
    ELSE 
        -- Desactivando el miembro del proyecto
        UPDATE project_team_member
        SET active = 0, id_deleter = p_id_leader
        WHERE id_project_team_member = p_id_project_team_member;
        -- Cuando es exitoso
        SELECT 'SUCCESS' AS 'message';
    END IF;
END //
DELIMITER ;


-- new sp sprint 2 - Gestor de tareas

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
        ptm.id_project_role
    FROM project p
    INNER JOIN project_team_member ptm ON p.id_project = ptm.id_project
    INNER JOIN user u ON ptm.id_collaborator = u.id_user
    WHERE p.id_project = p_id_project
    AND ptm.id_collaborator = p_id_user;
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

-- SP para buscar miembros del equipo de un proyecto
DELIMITER //
CREATE PROCEDURE `sp_search_project_team_member`(
    IN p_id_project INT,
    IN p_team_member_name VARCHAR(50)
)
BEGIN
    -- Seteando lo que se desea buscar con el formato más optimo
    SET @search_team_member_name = UPPER(CONCAT('%', p_team_member_name, '%'));
    -- Trayendo datos
    SELECT 
        u.id_user AS "id_collaborator",
        u.user_name AS "name",
        u.user_surname AS "surname",
        u.url_photo AS "url_photo",
        u.email
    FROM project_team_member ptm
    INNER JOIN user u ON ptm.id_collaborator = u.id_user
    WHERE ptm.id_project = p_id_project
    AND UPPER(CONCAT(u.user_name, ' ', u.user_surname)) LIKE @search_team_member_name
    ORDER BY u.user_name ASC, u.user_surname ASC;
END //
DELIMITER ;

-- Sp para listar la información de la task_board
DELIMITER //
CREATE PROCEDURE `sp_get_project_task_board`(
    IN p_id_project INT,
    IN p_id_collaborator INT
)
BEGIN
    -- Validando si el collab existe en el proyecto
    IF (
        SELECT check_collaborator_exists(p_id_project, p_id_collaborator)
    ) = 0 THEN
        -- Cuando el colaborador no está dentro del proyecto.
        SELECT 'COLLAB_IS_NOT_IN_PROJECT' AS 'message';
    ELSE
        SELECT 
            t.id_task,
            t.task_name,
            t.description AS "task_description",
            t.state AS "task_state",
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
    END IF;
END //
DELIMITER ;

-- SP para traer las imagenes de las prioridades
DELIMITER //
CREATE PROCEDURE `sp_create_task`(
    IN p_id_project INT,
    IN p_id_collaborator INT,
    IN p_task_name VARCHAR(40),
    IN p_task_state CHAR(1)
)
BEGIN
    -- Validando si el collab existe en el proyecto
    IF (
        SELECT check_collaborator_exists(p_id_project, p_id_collaborator)
    ) = 0 THEN
        -- Cuando el colaborador no está dentro del proyecto.
        SELECT 'COLLAB_IS_NOT_IN_PROJECT' AS 'message';
    ELSE
        -- Creando tarea basica
        INSERT INTO task(
            task_name,
            state,
            id_project
        ) VALUES (
            p_task_name,
            p_task_state,
            p_id_project
        );
        SET @id_task = LAST_INSERT_ID();

        -- Verificando si el colaborador es miembro
        IF EXISTS(
            SELECT id_project_role
            FROM project_team_member
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

-- SP para eliminar una tarea
DELIMITER //
CREATE PROCEDURE `sp_delete_task`(
    IN p_id_project INT,
    IN p_id_collaborator INT,
    IN p_id_task_to_be_deleted INT
)
BEGIN
    -- Validando si el collab existe en el proyecto
    IF (
        SELECT check_collaborator_exists(p_id_project, p_id_collaborator)
    ) = 0 THEN
        -- Cuando el colaborador no está dentro del proyecto.
        SELECT 'COLLAB_IS_NOT_IN_PROJECT' AS 'message';
    ELSE
        IF (
            SELECT check_task_is_not_him(p_id_task_to_be_deleted, p_id_collaborator)
        ) = 1 THEN
            -- Cuando el colaborador es miembro del proyecto y no es su tarea.
            SELECT 'COLLAB_IS_PMB_AND_TASK_IS_NOT_HIM' AS 'message';
        ELSE
            -- Eliminando la subtareas de la tarea
            DELETE FROM task_comment
            WHERE id_task = p_id_task_to_be_deleted;

            -- Eliminando la comentarios de la tarea
            DELETE FROM subtask
            WHERE id_task = p_id_task_to_be_deleted;

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
    IN p_id_collaborator INT,
    IN p_id_task INT,
    IN p_comment VARCHAR(200)
)
BEGIN
    -- Validando si el collab existe en el proyecto
    IF (
        SELECT check_collaborator_exists(p_id_project, p_id_collaborator)
    ) = 0 THEN
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

-- SP para cambiar el estado de la subtarea
DELIMITER //
CREATE PROCEDURE `sp_change_task_state`(
    IN p_id_project INT,
    IN p_id_collaborator INT,
    IN p_id_task INT,
    IN p_task_state CHAR(1)
)
BEGIN
    -- Validando si el collab existe en el proyecto
    IF (
        SELECT check_collaborator_exists(p_id_project, p_id_collaborator)
    ) = 0 THEN
        -- Cuando el colaborador no está dentro del proyecto.
        SELECT 'COLLAB_IS_NOT_IN_PROJECT' AS 'message';
    ELSE
        IF (
            SELECT check_task_is_not_him(p_id_task, p_id_collaborator)
        ) = 1 THEN
            -- Cuando el colaborador es miembro del proyecto y no es su tarea.
            SELECT 'COLLAB_IS_PMB_AND_TASK_IS_NOT_HIM' AS 'message';
        ELSE
            -- Cambiar de estado a la tarea
            UPDATE task
            SET state = p_task_state
            WHERE id_task = p_id_task;
            -- Cuando la creación de la tarea es exitosa.
            SELECT 'SUCCESS' AS 'message';
        END IF;
    END IF;
END //
DELIMITER ;

-- SP para actualizar una tarea de la información principal
DELIMITER //
CREATE PROCEDURE `sp_update_task_main_info`(
    IN p_id_project INT,
    IN p_id_collaborator INT,
    IN p_id_task INT,
    IN p_id_responsible INT,
    IN p_task_name VARCHAR(40),
    IN p_description VARCHAR(200),
    IN p_deadline DATE,
    IN p_id_task_priority INT
)
BEGIN
    -- Validando si el collab existe en el proyecto
    IF (
        SELECT check_collaborator_exists(p_id_project, p_id_collaborator)
    ) = 0 THEN
        -- Cuando el colaborador no está dentro del proyecto.
        SELECT 'COLLAB_IS_NOT_IN_PROJECT' AS 'message';
    ELSE
        IF (
            SELECT check_task_is_not_him(p_id_task, p_id_collaborator)
        ) = 1 THEN
            -- Cuando el colaborador es miembro del proyecto y no es su tarea.
            SELECT 'COLLAB_IS_PMB_AND_TASK_IS_NOT_HIM' AS 'message';
        ELSE
            IF EXISTS (
                SELECT id_collaborator
                FROM project_team_member
                WHERE id_collaborator = p_id_collaborator
                AND id_project = p_id_project
                AND id_project_role = "PLD"
            ) THEN
                SET @id_responsible = p_id_responsible;
            ELSE
                SET @id_responsible = p_id_collaborator;
            END IF;

            -- Actualizando la tarea
            UPDATE task
            SET id_responsible = @id_responsible,
                task_name = p_task_name,
                description = p_description,
                deadline = p_deadline,
                id_task_priority = p_id_task_priority
            WHERE id_project = p_id_project
            AND id_task = p_id_task;

            -- Cuando la creación de la tarea es exitosa.
            SELECT 'SUCCESS' AS 'message';
        END IF;
    END IF;
END //
DELIMITER ;

-- SP para crear una subtarea
DELIMITER //
CREATE PROCEDURE `sp_create_subtask`(
    IN p_id_project INT,
    IN p_id_collaborator INT,
    IN p_id_task INT,
    IN p_subtask_name VARCHAR(50)
)
BEGIN
    -- Validando si el collab existe en el proyecto
    IF (
        SELECT check_collaborator_exists(p_id_project, p_id_collaborator)
    ) = 0 THEN
        -- Cuando el colaborador no está dentro del proyecto.
        SELECT 'COLLAB_IS_NOT_IN_PROJECT' AS 'message';
    ELSE
        IF (
            SELECT check_task_is_not_him(p_id_task, p_id_collaborator)
        ) = 1 THEN
            -- Cuando el colaborador es miembro del proyecto y no es su tarea.
            SELECT 'COLLAB_IS_PMB_AND_TASK_IS_NOT_HIM' AS 'message';
        ELSE
            -- Insertando la nueva subtarea
            INSERT INTO subtask(
                subtask_name,
                id_task
            ) VALUES (
                p_subtask_name,
                p_id_task
            );
            -- Cuando la creación de la tarea es exitosa.
            SELECT 'SUCCESS' AS 'message';
        END IF;
    END IF;
END //
DELIMITER ;

-- SP para actualizar una tarea de la información principal
DELIMITER //
CREATE PROCEDURE `sp_update_subtask`(
    IN p_id_project INT,
    IN p_id_collaborator INT,
    IN p_id_subtask INT,
    IN p_subtask_name VARCHAR(50)
)
BEGIN
    -- extrayendo el id_task
    SET @id_task = (
        SELECT st.id_task
        FROM task t
        INNER JOIN subtask st ON t.id_task = st.id_task
        WHERE st.id_subtask = p_id_subtask
    );
    -- Validando si el collab existe en el proyecto
    IF (
        SELECT check_collaborator_exists(p_id_project, p_id_collaborator)
    ) = 0 THEN
        -- Cuando el colaborador no está dentro del proyecto.
        SELECT 'COLLAB_IS_NOT_IN_PROJECT' AS 'message';
    ELSE
        IF (
            SELECT check_task_is_not_him(@id_task, p_id_collaborator)
        ) = 1 THEN
            -- Cuando el colaborador es miembro del proyecto y no es su tarea.
            SELECT 'COLLAB_IS_PMB_AND_TASK_IS_NOT_HIM' AS 'message';
        ELSE
            -- Actualizando la subtarea
            UPDATE subtask
            SET subtask_name = p_subtask_name
            WHERE id_subtask = p_id_subtask;

            -- Cuando la creación de la tarea es exitosa.
            SELECT 'SUCCESS' AS 'message';
        END IF;
    END IF;
END //
DELIMITER ;

-- SP para cambiar el estado de la subtarea
DELIMITER //
CREATE PROCEDURE `sp_switch_check_status_subtask`(
    IN p_id_project INT,
    IN p_id_collaborator INT,
    IN p_id_subtask INT,
    IN p_subtask_checked BIT
)
BEGIN
    -- extrayendo el id_task
    SET @id_task = (
        SELECT st.id_task
        FROM task t
        INNER JOIN subtask st ON t.id_task = st.id_task
        WHERE st.id_subtask = p_id_subtask
    );
    -- Validando si el collab existe en el proyecto
    IF (
        SELECT check_collaborator_exists(p_id_project, p_id_collaborator)
    ) = 0 THEN
        -- Cuando el colaborador no está dentro del proyecto.
        SELECT 'COLLAB_IS_NOT_IN_PROJECT' AS 'message';
    ELSE
        IF (
            SELECT check_task_is_not_him(@id_task, p_id_collaborator)
        ) = 1 THEN
            -- Cuando el colaborador es miembro del proyecto y no es su tarea.
            SELECT 'COLLAB_IS_PMB_AND_TASK_IS_NOT_HIM' AS 'message';
        ELSE
            -- Actualizando el checked de la subtarea
            UPDATE subtask
            SET checked = p_subtask_checked
            WHERE id_subtask = p_id_subtask;

            -- Cuando la creación de la tarea es exitosa.
            SELECT 'SUCCESS' AS 'message';
        END IF;
    END IF;
END //
DELIMITER ;

-- SP para elimiar una subtarea
DELIMITER //
CREATE PROCEDURE `sp_delete_subtask`(
    IN p_id_project INT,
    IN p_id_collaborator INT,
    IN p_id_subtask INT
)
BEGIN
    -- extrayendo el id_task
    SET @id_task = (
        SELECT st.id_task
        FROM task t
        INNER JOIN subtask st ON t.id_task = st.id_task
        WHERE st.id_subtask = p_id_subtask
    );
    -- Validando si el collab existe en el proyecto
    IF (
        SELECT check_collaborator_exists(p_id_project, p_id_collaborator)
    ) = 0 THEN
        -- Cuando el colaborador no está dentro del proyecto.
        SELECT 'COLLAB_IS_NOT_IN_PROJECT' AS 'message';
    ELSE
        IF (
            SELECT check_task_is_not_him(@id_task, p_id_collaborator)
        ) = 1 THEN
            -- Cuando el colaborador es miembro del proyecto y no es su tarea.
            SELECT 'COLLAB_IS_PMB_AND_TASK_IS_NOT_HIM' AS 'message';
        ELSE
            -- Actualizando el checked de la subtarea
            DELETE FROM subtask
            WHERE id_subtask = p_id_subtask;

            -- Cuando la creación de la tarea es exitosa.
            SELECT 'SUCCESS' AS 'message';
        END IF;
    END IF;
END //
DELIMITER ;

-- new sp sprint 3 - Chats 

-- SP para obtener la previsualización de chats privados
DELIMITER //
CREATE PROCEDURE `sp_search_private_chat_preview`(
    IN p_id_collaborator INT,
    IN p_searched_collaborator VARCHAR(50)
)
BEGIN
    SET @searched_collaborator_name = UPPER(CONCAT('%',p_searched_collaborator,'%'));
    SELECT 
        clb.id_collaborator,
        u.user_name AS "collaborator_name",
        u.user_surname AS "collaborator_surname",
        u.url_photo AS "collaborator_url_photo",
        pvcm.id_collaborator_sender AS "last_message_id_sender",
        pvcm.id_collaborator_receiver,
        pvcm.message AS "last_message",
        pvcm.datetime AS "last_message_datetime",
        pvcm.seen
    FROM collaborator clb
    INNER JOIN user u
        ON clb.id_collaborator = u.id_user
    LEFT JOIN private_chat_message pvcm
        ON (
            pvcm.id_collaborator_sender = p_id_collaborator AND
            pvcm.id_collaborator_receiver = clb.id_collaborator
        ) OR (
            pvcm.id_collaborator_sender = clb.id_collaborator AND
            pvcm.id_collaborator_receiver = p_id_collaborator
        )
    WHERE u.id_user != p_id_collaborator
        AND UPPER(CONCAT(u.user_name, ' ', u.user_surname)) LIKE @searched_collaborator_name
        AND (
                pvcm.id_private_chat_message IS NULL
                OR pvcm.datetime = (
                    SELECT MAX(datetime)
                    FROM private_chat_message
                    WHERE id_collaborator_sender IN (
                        pvcm.id_collaborator_sender, 
                        pvcm.id_collaborator_receiver
                    ) AND id_collaborator_receiver IN (
                        pvcm.id_collaborator_sender, 
                        pvcm.id_collaborator_receiver
                    )
                    GROUP BY 
                        LEAST(pvcm.id_collaborator_sender, pvcm.id_collaborator_receiver), 
                        GREATEST(pvcm.id_collaborator_sender, pvcm.id_collaborator_receiver)
                )
            )
    ORDER BY pvcm.datetime DESC, u.user_name ASC, u.user_surname ASC;
END //
DELIMITER ;

-- SP para obtener la previsualización de chats privados con mensajes
DELIMITER //
CREATE PROCEDURE `sp_get_private_chat_preview_with_messages`(
    IN p_id_collaborator INT
)
BEGIN
    SELECT 
        u.id_user AS "id_collaborator",
        u.user_name AS "collaborator_name",
        u.user_surname AS "collaborator_surname",
        u.url_photo AS "collaborator_url_photo",
        pvcm.id_collaborator_sender AS "last_message_id_sender",
        pvcm.message AS "last_message",
        pvcm.datetime AS "last_message_datetime",
        pvcm.seen
    FROM user u
    LEFT JOIN private_chat_message pvcm
    	ON u.id_user IN (pvcm.id_collaborator_sender, pvcm.id_collaborator_receiver)
    WHERE u.id_user != p_id_collaborator 
        AND p_id_collaborator IN (pvcm.id_collaborator_sender, pvcm.id_collaborator_receiver)
        AND pvcm.datetime = (
            SELECT MAX(datetime)
            FROM private_chat_message
            WHERE id_collaborator_sender IN (
                pvcm.id_collaborator_sender, 
                pvcm.id_collaborator_receiver
            ) AND id_collaborator_receiver IN (
                pvcm.id_collaborator_sender, 
                pvcm.id_collaborator_receiver
            )
            GROUP BY 
                LEAST(pvcm.id_collaborator_sender, pvcm.id_collaborator_receiver), 
                GREATEST(pvcm.id_collaborator_sender, pvcm.id_collaborator_receiver)
        )
    ORDER BY pvcm.datetime DESC, u.user_name ASC, u.user_surname ASC;
END //
DELIMITER ;

-- SELECT * FROM project_team_member_seen_message WHERE id_project_chat_message = 3;
-- Sp para despachar la previsualización de chats de proyectos
DELIMITER //
CREATE PROCEDURE `sp_search_project_chat_preview`(
    IN p_id_collaborator INT,
    IN p_searched_project VARCHAR(100)
)
BEGIN
    SET @searched_project = UPPER(CONCAT('%',p_searched_project,'%'));
    SELECT 
        p.id_project AS "id_project",
        p.project_name AS "project_name",
        prcm.datetime AS "last_message_datetime",
        prcm.message AS "last_message",
        ptm_prcm.id_collaborator AS "last_message_id_sender",
        TRIM(SUBSTRING_INDEX(u_prcm.user_name, ' ', 1)) AS "sender_first_name",
        CASE
            WHEN ptm_prcm.id_collaborator IS NOT NULL AND ptmsm.seen IS NULL THEN 1
            ELSE ptmsm.seen
        END AS "seen"
    FROM project p
    INNER JOIN project_team_member ptm
        ON ptm.id_project = p.id_project
    LEFT JOIN project_chat_message prcm
        ON prcm.id_project = ptm.id_project
    LEFT JOIN project_team_member ptm_prcm
        ON ptm_prcm.id_project_team_member = prcm.id_project_team_member_sender
    LEFT JOIN user u_prcm
        ON u_prcm.id_user = ptm_prcm.id_collaborator
    LEFT JOIN project_team_member_seen_message ptmsm
    	ON ptmsm.id_project_chat_message = prcm.id_project_chat_message  
        	AND ptmsm.id_project_team_member = ptm.id_project_team_member
    WHERE ptm.id_collaborator = p_id_collaborator 
        AND UPPER(p.project_name) LIKE @searched_project
        AND (
                prcm.id_project_chat_message IS NULL OR
                (
                    p_id_collaborator = ptm.id_collaborator
                    AND prcm.datetime = (
                        SELECT MAX(datetime)
                        FROM project_chat_message
                        WHERE id_project = prcm.id_project
                        GROUP BY prcm.id_project_chat_message
                    )
                )
        )
    ORDER BY prcm.datetime DESC, p.project_name ASC;
END //
DELIMITER ;

-- SP para obtener los datos de los mensajes de un chat privado
DELIMITER //
CREATE PROCEDURE `sp_get_private_chat_messages`(
    IN p_id_collaborator_open_chat INT,
    IN p_id_collaborator_chat INT
)
BEGIN
    -- Obteniendo los datos de los mensajes del chat privado
    SELECT 
        id_private_chat_message,
        id_collaborator_sender,
        message, datetime
    FROM private_chat_message
    WHERE 
        (
            p_id_collaborator_open_chat = id_collaborator_sender AND 
            p_id_collaborator_chat = id_collaborator_receiver
        ) OR (
            p_id_collaborator_open_chat = id_collaborator_receiver AND 
            p_id_collaborator_chat = id_collaborator_sender
        );
END //
DELIMITER ;

-- SP para obtener los datos de los mensajes de un chat privado
DELIMITER //
CREATE PROCEDURE `sp_get_collaborator_relations_in_private_chat`(
    IN p_id_collaborator_open_chat INT,
    IN p_id_collaborator_chat INT
)
BEGIN
    -- Obteniendo los datos de los mensajes del chat privado
    -- p_id_collaborator_chat
    SELECT 
        p.id_project,
        p.project_name AS "id_project_name_relation",
        ptm_cc.id_project_role AS "id_project_role_relation"
    FROM project_team_member ptm_coc
    INNER JOIN project p
        ON p.id_project = ptm_coc.id_project
    INNER JOIN project_team_member ptm_cc
        ON ptm_cc.id_project = p.id_project
    WHERE 
        ptm_coc.id_collaborator = p_id_collaborator_open_chat AND 
        ptm_cc.id_collaborator = p_id_collaborator_chat;
END //
DELIMITER ;

-- SP para marcar como visto en un chat privado
DELIMITER //
CREATE PROCEDURE `sp_mark_private_messages_as_seen`(
    IN p_id_collaborator_open_chat INT,
    IN p_id_collaborator_chat INT
)
BEGIN
    -- Marcando como visto el mensaje privado
    UPDATE private_chat_message
    SET seen = 1
    WHERE (
        (
            id_collaborator_sender = p_id_collaborator_open_chat AND 
            id_collaborator_receiver = p_id_collaborator_chat
        ) OR (
            id_collaborator_sender = p_id_collaborator_chat AND 
            id_collaborator_receiver = p_id_collaborator_open_chat
        )
    );
END //
DELIMITER ;

-- SP para obtener los mensajes de un chat de proyecto
DELIMITER //
CREATE PROCEDURE `sp_get_project_chat_messages`(
    IN p_id_project INT
)
BEGIN
    SELECT
        u.id_user AS "id_collaborator_project",
        TRIM(SUBSTRING_INDEX(u.user_name, ' ', 1)) AS "collaborator_project_first_name",
        prcm.id_project_chat_message,
        ptm_prcm.id_collaborator AS "id_collaborator_sender",
        prcm.message,
        prcm.datetime
    FROM project p 
    -- Obteniendo datos de los miembros del equipo de este proyecto
    INNER JOIN project_team_member ptm_cp
    	ON ptm_cp.id_project = p.id_project
    INNER JOIN user u
    	ON u.id_user = ptm_cp.id_collaborator
    -- Obteniendo los mensajes del chat del proyecto (a partir de cualquiera de los miembros que los hayan emitido)
    LEFT JOIN project_chat_message prcm
        ON prcm.id_project_team_member_sender = ptm_cp.id_project_team_member
    LEFT JOIN project_team_member ptm_prcm
    	ON ptm_prcm.id_project_team_member = prcm.id_project_team_member_sender
    WHERE p.id_project = p_id_project;
END //
DELIMITER ;

-- SP para marcar como visto como visto de parte de un miembro del proyecto cuando abre el chat
DELIMITER //
CREATE PROCEDURE `sp_mark_project_messages_as_seen`(
    IN p_id_collaborator_open_chat INT,
    IN p_id_project INT
)
BEGIN
    -- obteniendo el id_project_team_member
    SET @id_project_team_member = (
        SELECT id_project_team_member
        FROM project_team_member
        WHERE id_project = p_id_project
        AND id_collaborator = p_id_collaborator_open_chat
    );
    -- Marcando como visto el mensaje privado
    UPDATE project_team_member_seen_message
    SET seen = 1
    WHERE id_project_team_member = @id_project_team_member;
END //
DELIMITER ;

-- SP para enviar mensajes de un chat privado
DELIMITER //
CREATE PROCEDURE `sp_send_message_to_private_chat`(
    IN p_id_sender INT,
    IN p_id_reciver INT,
    IN p_message VARCHAR(200)
)
BEGIN
    -- Enviando nuevo mensaje en privado
    INSERT INTO `private_chat_message`(
        `message`,
        `datetime`,
        `id_collaborator_sender`,
        `id_collaborator_receiver`
    ) VALUES (
        p_message,
        NOW(),
        p_id_sender,
        p_id_reciver
    );
    SET @id_private_chat_message = LAST_INSERT_ID();

    -- Luego de insertarlo, devolver el message con un SELECT
    SELECT 
        id_private_chat_message,
        id_collaborator_sender,
        message, datetime
    FROM private_chat_message prcm
    WHERE id_private_chat_message = @id_private_chat_message;
END //
DELIMITER ;

-- SP para enviar mensajes de un chat proyecto
DELIMITER //
CREATE PROCEDURE `sp_send_message_to_project_chat`(
    IN p_id_sender INT,
    IN p_id_project INT,
    IN p_message VARCHAR(200)
)
BEGIN
    SET @id_project_team_member_sender = (
        SELECT ptm.id_project_team_member 
        FROM project_team_member ptm 
        WHERE ptm.id_collaborator = p_id_sender AND ptm.id_project = p_id_project
    );
    -- Enviando nuevo mensaje al proyecto
    INSERT INTO `project_chat_message`(
        `message`,
        `datetime`,
        `id_project_team_member_sender`,
        `id_project`
    ) VALUES (
        p_message,
        NOW(),
        @id_project_team_member_sender,
        p_id_project
    );
    SET @id_project_chat_message = LAST_INSERT_ID();
    -- Se creo la insercion de los project_team_member_seen_message para cada colab del proyecto

    UPDATE project_team_member_seen_message
    SET seen = 1
    WHERE id_project_team_member = @id_project_chat_message;
    
    -- Luego de insertarlo, devolver el message con un SELECT
    SELECT 
        prcm.id_project_chat_message,
        ptm.id_collaborator AS "id_collaborator_sender",
        prcm.message, prcm.datetime
    FROM project_chat_message prcm
    INNER JOIN project_team_member ptm
    	ON ptm.id_project_team_member = prcm.id_project_team_member_sender
    WHERE prcm.id_project_chat_message = @id_project_chat_message AND 
        ptm.id_collaborator = p_id_sender;
END //
DELIMITER ;

-- SP para saber si un colaborador tiene chats privados sin leer.
DELIMITER //
CREATE PROCEDURE `sp_collaborator_has_unread_private_chats`(
    IN p_id_collaborator INT
)
BEGIN
    IF EXISTS (
        SELECT *
        FROM private_chat_message
        WHERE id_collaborator_receiver = p_id_collaborator
        AND seen = 0
    ) THEN
        SELECT 1 AS 'has_unread_chats';
    ELSE
        SELECT 0 AS 'has_unread_chats';
    END IF;
END //
DELIMITER ;

-- SP para saber si un colaborador tiene chats de proyecto sin leer.
DELIMITER //
CREATE PROCEDURE `sp_collaborator_has_unread_project_chats`(
    IN p_id_collaborator INT
)
BEGIN
    IF EXISTS (
        SELECT *
        FROM project_team_member_seen_message ptm_sm
        INNER JOIN project_team_member ptm
        	ON ptm.id_project_team_member = ptm_sm.id_project_team_member
        WHERE ptm.id_collaborator = p_id_collaborator
        AND seen = 0
    ) THEN
        SELECT 1 AS 'has_unread_chats';
    ELSE
        SELECT 0 AS 'has_unread_chats';
    END IF;
END //
DELIMITER ;

-- PARA INSERTAR LOS DATOS DE MANERA ADECUADA
DELIMITER //
CREATE PROCEDURE `test_send_message_to_project_chat`(
    IN p_id_project_team_member_sender INT,
    IN p_id_project INT,
    IN p_datetime DATETIME,
    IN p_message VARCHAR(200)
)
BEGIN
    -- Enviando nuevo mensaje al proyecto
    INSERT INTO `project_chat_message`(
        `message`,
        `datetime`,
        `id_project_team_member_sender`,
        `id_project`
    ) VALUES (
        p_message,
        p_datetime,
        p_id_project_team_member_sender,
        p_id_project
    );
    SET @id_project_chat_message = LAST_INSERT_ID();
    -- Se creo la insercion de los project_team_member_seen_message para cada colab del proyecto
END //
DELIMITER ;
-- INSETANDO LOS NUEVOS CHATS
CALL test_send_message_to_project_chat(1, 1, '2023-06-28 19:38:40','Chicos avancen sus partes crj');
CALL test_send_message_to_project_chat(2, 1, '2023-06-28 20:01:40','va va 1');
CALL test_send_message_to_project_chat(3, 1, '2023-06-28 20:02:50','va va 2');
CALL test_send_message_to_project_chat(7, 3, '2023-06-28 23:12:10','mesaje para el proyecto 3');