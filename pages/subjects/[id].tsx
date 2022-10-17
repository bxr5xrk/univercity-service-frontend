import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import ListWithLinks from "../../components/ListWithLinks";
import RemoveItem from "../../components/removeItem";
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
                    <section className="flex justify-between">
                        <Breadcrumbs
                            linksArr={[
                                { href: "/subjects", title: "Subjects" },
                                { title: subject!.title },
                            ]}
                        />
                        <div className="flex gap-2 mt-2">
                            <RemoveItem id={subject.id} type="subject" />
                        </div>
                    </section>
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
