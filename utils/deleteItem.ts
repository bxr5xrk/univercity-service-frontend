import { GET_ALL } from "./../queries/index";
import { useMutation } from "@apollo/client";
import { REMOVE_GROUP } from "../queries/group";
import { REMOVE_LECTURER } from "../queries/lecturer";
import { REMOVE_STUDENT } from "../queries/student";
import { dataType } from "../types";
import { REMOVE_SUBJECT } from "../queries/subject";

export const variablesForDeleting = (id: number, type: dataType) =>
    type === "group"
        ? { removeGroupId: id }
        : type === "lecturer"
        ? { removeLecturerId: id }
        : type === "student"
        ? { removeStudentId: id }
        : { removeSubjectId: id };

export const DeleteItem = (id: number, type: dataType) => {
    const QUERY_NAME =
        type === "group"
            ? REMOVE_GROUP
            : type === "lecturer"
            ? REMOVE_LECTURER
            : type === "student"
            ? REMOVE_STUDENT
            : REMOVE_SUBJECT;
    const variables = variablesForDeleting(id, type);

    const [removeItem, { data, loading, error }] = useMutation(QUERY_NAME, {
        variables,
        refetchQueries: [{ query: GET_ALL }],
    });
    return { data, loading, error, removeItem };
};
