export type AddProjectMembersRequestBody = {
    projectId: number,
    membersIds: number[]
};
export type DeleteProjectMemberRequestBody = {
    userId: number,
    projectHasMemberId: number
};