import { gql } from "@apollo/client";
export const REMOVE_GROUP = gql`
    mutation RemoveGroup($removeGroupId: Int!) {
        removeGroup(id: $removeGroupId) {
            id
        }
    }
`;
