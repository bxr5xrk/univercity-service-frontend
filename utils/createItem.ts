import { CREATE_SUBJECT } from "./../queries/subject";
import { CREATE_STUDENT } from "./../queries/student";
import { CREATE_LECTURER } from "./../queries/lecturer";
import { CREATE_GROUP } from "../queries/group";
import { dataType } from "./../types/index";
import { useMutation } from "@apollo/client";
import { GET_ALL } from "../queries";

export const variablesForCreating = (
    title: string,
    type: dataType,
    groupId: number
) =>
    type === "group"
        ? {
              createGroupInput: {
                  title,
              },
          }
        : type == "lecturer"
        ? {
              createLecturerInput: {
                  fullName: title,
              },
          }
        : type === "student"
        ? {
              createStudentInput: {
                  fullName: title,
                  groupId,
              },
          }
        : {
              createSubjectInput: {
                  title,
              },
          };

const queryForCreation = (type: dataType) =>
    type === "group"
        ? CREATE_GROUP
        : type === "lecturer"
        ? CREATE_LECTURER
        : type === "student"
        ? CREATE_STUDENT
        : CREATE_SUBJECT;

export const CreateNewItem = (
    title: string,
    type: dataType,
    groupId: number
) => {
    const QUERY_NAME = queryForCreation(type);
    const variables = variablesForCreating(title, type, groupId);

    const [createItem, { data, loading, error }] = useMutation(QUERY_NAME, {
        variables,
        refetchQueries: [{ query: GET_ALL }],
    });
    return { data, loading, error, createItem };
};
