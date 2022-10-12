import { GET_ALL } from "./../queries/index";
import { useMutation } from "@apollo/client";
import { REMOVE_GROUP } from "../queries/group";
import { REMOVE_LECTURER } from "../queries/lecturer";

export const variablesForDeleting = (id: number, type: "group" | "lecturer") =>
    type === "group" ? { removeGroupId: id } : { removeLecturerId: id };

export const DeleteItem = (id: number, type: "group" | "lecturer") => {
    const QUERY_NAME = type === "group" ? REMOVE_GROUP : REMOVE_LECTURER;
    const variables = variablesForDeleting(id, type);

    const [removeItem, { data, loading, error }] = useMutation(QUERY_NAME, {
        variables,
        refetchQueries: [{ query: GET_ALL }],
    });
    return { data, loading, error, removeItem };
};
