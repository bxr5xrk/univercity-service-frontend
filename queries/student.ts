import { gql } from "@apollo/client";

export const GET_STUDENT = gql`
    query Student($studentId: Int!) {
        student(id: $studentId) {
            id
            fullName
            group {
                title
                id
            }
        }
    }
`;

export const REMOVE_STUDENT = gql`
    mutation RemoveStudent($removeStudentId: Int!) {
        removeStudent(id: $removeStudentId) {
            id
        }
    }
`;

export const CREATE_STUDENT = gql`
    mutation CreateStudent($createStudentInput: CreateStudentInput!) {
        createStudent(createStudentInput: $createStudentInput) {
            id
        }
    }
`;
