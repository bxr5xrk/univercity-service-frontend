import { gql } from "@apollo/client";

export const GET_LECTURER = gql`
    query Lecturer($lecturerId: Int!) {
        lecturer(id: $lecturerId) {
            id
            fullName
            groups {
                title
                id
            }
            subjects {
                title
                id
            }
        }
    }
`;

export const REMOVE_LECTURER = gql`
    mutation RemoveLecturer($removeLecturerId: Int!) {
        removeLecturer(id: $removeLecturerId) {
            id
        }
    }
`;

export const CREATE_LECTURER = gql`
    mutation CreateLecturer($createLecturerInput: CreateLecturerInput!) {
        createLecturer(createLecturerInput: $createLecturerInput) {
            id
        }
    }
`;
