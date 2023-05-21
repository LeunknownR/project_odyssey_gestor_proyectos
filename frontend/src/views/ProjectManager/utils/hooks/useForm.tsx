// import { useEffect, useState } from "react";
// import { ProjectForm } from "../../types";
// import { INITIAL_FORM } from "../constants";

// const useForm = () => {
//     const [form, setForm] = useState<ProjectForm>({ ...INITIAL_FORM });
//     useEffect(() => {
//         initForm();
//     }, [modalProps.isOpen]);
//     const initForm = () => {
//         if (!modalProps.isOpen) return;
//         setErrors(INITIAL_ERRORS);
//         if (!currentCompany) {
//             setForm(INITIAL_FORM);
//             return;
//         }
//         setForm({
//             name: "",
//             description: "",
//             startDate: -1,
//             endDate: -1,
//             leaderId: 0,
//         });
//     };
//     return {
//         form: {
//             value: form,
//             isCompleted: isCompletedForm,
//             haveChanges: formHaveChanges,
//             change: changeField,
//             validate: validateForm,
//         },
//         getCustomerFromForm,
//     };
// };

// export default useForm;
