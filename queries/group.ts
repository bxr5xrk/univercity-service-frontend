import { gql } from "@apollo/client";

export const REMOVE_GROUP = gql`
    mutation RemoveGroup($removeGroupId: Int!) {
        removeGroup(id: $removeGroupId) {
            id
        }
    }
`;

export const CREATE_GROUP = gql`
    mutation CreateGroup($createGroupInput: CreateGroupInput!) {
        createGroup(createGroupInput: $createGroupInput) {
            id
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

export const GET_GROUPS = gql`
    query Groups {
        groups {
            id
            title
        }
    }
`;
