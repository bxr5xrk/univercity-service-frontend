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
