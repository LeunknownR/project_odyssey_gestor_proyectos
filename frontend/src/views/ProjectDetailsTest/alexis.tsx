// import { useState } from "react";
// import useCustomInputSearch from "src/components/CustomInputSearch/utils/hooks/useCustomInputSearch";
// import { CollaboratorUser } from "src/entities/collaborator/types";

// const useAddProjectMembers = () => {
//     const selectProjectLeaderHandler = useSelectCollaborator({
//         requestSearchCollaborators: async (value: string) => {
//             const { data } = await request2(projectId, value);
//             return data;
//         }
//     });
//     const customSearchInputHandler = useCustomInputSearch<CollaboratorUser>({
//         clearOptions: selectProjectLeaderHandler.clear,
//         fillOptions: selectProjectLeaderHandler.fill,
//         onChange: (collaboratorUser) => collaboratorUser && addProjectMemmberToAddList(collaboratorUser)
//     });
//     const [projectMembersToAddList, setProjectMembersToAddList] = useState<CollaboratorUser[]>([]);
//     const addProjectMemmberToAddList = (projectMember: CollaboratorUser) => {
//         setProjectMembersToAddList(prev => ([
//             ...prev,
//             projectMember
//         ]));
//     }
//     const removeProjectMemberToAddList = (projectMemberToDeleteId: number) => {
//         setProjectMembersToAddList(prev => prev.filter(({ id }) => id !== projectMemberToDeleteId));
//     }
//     return (
//         <>
//         {projectMembersToAddList.map(() => (
//             <Item onRemove={removeProjectMemberToAddList}/>
//         ))}
//         </>
//     );
//     // <CustomInputSearch<CollaboratorUser>
//     //         {...TEXT_FIELD_PROPS.PROJECT_LEADER}
//     //         options={selectProjectLeaderHandler.value}
//     //         getSearchedItemToShow={option => ({ 
//     //             value: option.id,
//     //             text: selectProjectLeaderHandler.getText(option),
//     //             urlPhoto: option.urlPhoto
//     //         })}
//     //         onChange={customSearchInputHandler.changeSearchText}
//     //         selectOption={customSearchInputHandler.selectOption}
//     //         value={customSearchInputHandler.searchText}
//     //         variant="primary-search"
//     //         maxLength={100}
//     //     />
// }
// const Item = ({
//     id, 
//     onRemove
// }: ItemProps) => {
//     return (
//         <div>
//             <icon onClick={() => onRemove(id)}/>
//         </div>
//     )
// }