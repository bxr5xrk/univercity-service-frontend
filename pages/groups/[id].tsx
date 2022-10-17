import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import BackLink from "../../components/BackLink";
import Breadcrumbs from "../../components/Breadcrumbs";
import EditItem from "../../components/EditItem";
import EditItemIcon from "../../components/EditItem/icon";
import ListWithLinks from "../../components/ListWithLinks";
import RemoveItem from "../../components/removeItem";
import { GET_GROUP } from "../../queries/group";
import { IGroup, ILecturer, IStudent } from "../../types";

interface GroupData extends IGroup {
    students: IStudent[];
    lecturers: ILecturer[];
}

const GroupPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [showModal, setShowModal] = useState(false);

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
                    <section className="flex justify-between">
                        <Breadcrumbs
                            linksArr={[
                                { href: "/groups", title: "Groups" },
                                { title: group!.title },
                            ]}
                        />
                        <div className="flex gap-2 mt-2">
                            <RemoveItem id={group.id} type="group" />
                            <EditItemIcon setShowModal={setShowModal} />
                        </div>
                    </section>

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
                    {showModal && (
                        <EditItem
                            type="group"
                            id={group.id}
                            oldTitle={group.title}
                        />
                    )}
                </>
            )}
        </main>
    );
};

export default GroupPage;
