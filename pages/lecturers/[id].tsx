import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { FC } from "react";
import BackLink from "../../components/BackLink";
import ListWithLinks from "../../components/ListWithLinks";
import { GET_LECTURER } from "../../queries/query";
import { IGroup, ILecturer, ISubject } from "../../types";

interface LecturerData extends ILecturer {
    groups: IGroup[];
    subjects: ISubject[];
}

const LecturerPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { loading, error, data } = useQuery<{ lecturer: LecturerData }>(
        GET_LECTURER,
        {
            variables: { lecturerId: Number(id) },
        }
    );

    if (loading) return "loading";

    if (error) return "error";

    const lecturer = data && data.lecturer;

    return (
        <main className="text-center">
            {lecturer && (
                <>
                    <BackLink />
                    <h1 className="text-3xl text-teal-800 pb-2 border-b-2 border-black">
                        {lecturer.fullName}
                    </h1>

                    <ListWithLinks
                        title="Groups"
                        itemsWithTitle={lecturer.groups}
                    />
                    <ListWithLinks
                        title="Subjects"
                        itemsWithTitle={lecturer.subjects}
                    />
                </>
            )}
        </main>
    );
};

export default LecturerPage;
