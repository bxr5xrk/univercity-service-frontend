import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const GET_GROUP = gql`
    query Group($groupId: Int!) {
        group(id: $groupId) {
            id
            title
            students {
                fullName
            }
            lecturers {
                fullName
            }
        }
    }
`;

const GroupPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { loading, error, data } = useQuery(GET_GROUP, {
        variables: { groupId: Number(id) | 1 },
    });

    if (loading) return "loading";

    if (error) return "error";

    console.log(data);
    const { title } = data.group;

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default GroupPage;
