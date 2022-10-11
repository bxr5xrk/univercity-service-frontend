import { gql } from "@apollo/client";
export const CREATE_GROUP = gql`
    mutation CreateGroup($createGroupInput: CreateGroupInput!) {
        createGroup(createGroupInput: $createGroupInput) {
            id
        }
    }
`;
