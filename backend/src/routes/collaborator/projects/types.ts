export type GetProjectListForCollaboratorRequestBody = {
    projectName: string | null,
    collaboratorId: number
};
export type UpdateEndDateProjectRequestBody = {
    projectId: number,
    endDate: number
};
export type SearchCollaboratorRequestBody = {
    projectId: number,
    collaboratorName: string
}
export type AddProjectMembersRequestBody = {
    projectId: number,
    membersIds: number[]
};
export type DeleteProjectMemberRequestBody = {
    userId: number,
    projectHasCollaboratorId: number
};
export type GetProjectTableDetailRequestBody = {
    projectId: number,
    userId: number
};
