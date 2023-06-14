export type GetProjectListForCollaboratorRequestBody = {
    projectName: string | null,
    collaboratorId: number
};
export type UpdateEndDateProjectRequestBody = {
    projectId: number,
    endDate: number
};
export type AddProjectMembersRequestBody = {
    projectId: number,
    membersIds: number[]
};
export type DeleteProjectMemberRequestBody = {
    userId: number,
    projectHasCollaboratorId: number
};