import { gql } from "@apollo/client";

export const GET_ALL = gql`
    query QueryAllItems {
        groups {
            title
            id
        }
        lecturers {
            fullName
            id
        }
        students {
            fullName
            id
        }
        subjects {
            title
            id
        }
    }
`;

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

export const GET_GROUP = gql`
    query Group($groupId: Int!) {
        group(id: $groupId) {
            id
            title
            students {
                id
                fullName
            }
            lecturers {
                fullName
                id
            }
        }
    }
`;

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

export const GET_SUBJECT = gql`
    query Subject($subjectId: Int!) {
        subject(id: $subjectId) {
            id
            title
            lecturers {
                fullName
                id
            }
        }
    }
`;
