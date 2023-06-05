export const PROJECT_LIST_FOR_GENERAL_ADMIN_RESULSTSET: any[] = [
    {
        "id_project": 1,
        "project_name": "Proyecto",
        "project_description": "Descripción",
        "project_start_date": new Date(2023, 5, 12),
        "project_end_date": new Date(2023, 5, 14),
        "project_state": "P",
        "project_member_count": 12,
        "id_collaborator": 1,
        "collaborator_name": "Maycol",
        "collaborator_surname": "Chupa verga",
        "collaborator_email": "megustalapinga@gmail.com",
        "collaborator_url_photo": null,
    }
];
export const UPDATE_END_DATE_PROJECT_BY_LEADER_RESULTSET: any = {
    "message": "GAAAA"
};
export const MOKITOgetProjectTasksPriorities: any[] = [
    {
        "id_task_priority": 1,
        "url_image": "low.svg",
    },
    {
        "id_task_priority": 2,
        "url_image": "medium.svg",
    },
    {
        "id_task_priority": 3,
        "url_image": "high.svg",
    }
];
export const MOKITOGetProjectDetailForPanelRequestBody: any = {
    "id_project": 2,
    "project_name": "Gestor de proyectos - Project Odyssey",
    "project_state": "P",
    "id_project_role": "PLD"
};