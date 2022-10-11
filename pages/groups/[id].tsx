import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BackLink from "../../components/BackLink";
import ListWithLinks from "../../components/ListWithLinks";
import RemoveGroup from "../../components/remove/removeGroup";
import { GET_GROUP } from "../../queries/group";
import { IGroup, ILecturer, IStudent } from "../../types";

interface GroupData extends IGroup {
    students: IStudent[];
    lecturers: ILecturer[];
}

const GroupPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { loading, error, data } = useQuery<{ group: GroupData }>(GET_GROUP, {
        variables: { groupId: Number(id) },
    });

    if (loading) return "loading";

    if (error) return "error";

    const group = data && data.group;

    return (
        <main className="text-center">
            {group && (
                <>
                    <BackLink />
                    <RemoveGroup id={group.id} />
                    <h1 className="text-3xl text-teal-800 pb-2 border-b-2 border-black">
                        {group.title}
                    </h1>

                    <ListWithLinks
                        title="Students"
                        itemsWithFullName={group.students}
                    />
                    <ListWithLinks
                        title="Lecturers"
                        itemsWithFullName={group.lecturers}
                    />
                </>
            )}
        </main>
    );
};

export default GroupPage;
