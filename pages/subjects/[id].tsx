import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import BackLink from "../../components/BackLink";
import ListWithLinks from "../../components/ListWithLinks";
import { GET_SUBJECT } from "../../queries/subject";
import { ILecturer, ISubject } from "../../types";

interface SubjectData extends ISubject {
    lecturers: ILecturer[];
}

const SubjectPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { loading, error, data } = useQuery<{ subject: SubjectData }>(
        GET_SUBJECT,
        {
            variables: { subjectId: Number(id) },
        }
    );

    if (loading) return "loading";

    if (error) return "error";

    const subject = data && data.subject;

    return (
        <main className="text-center">
            {subject && (
                <>
                    <BackLink />
                    <h1 className="text-3xl text-teal-800 pb-2 border-b-2 border-black">
                        {subject.title}
                    </h1>

                    <ListWithLinks
                        title="Lecturers"
                        itemsWithFullName={subject.lecturers}
                    />
                </>
            )}
        </main>
    );
};

export default SubjectPage;
