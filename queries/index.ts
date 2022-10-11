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
