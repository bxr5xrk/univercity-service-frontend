import { gql } from "@apollo/client";

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
