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
