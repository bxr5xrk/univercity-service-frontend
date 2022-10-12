import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import BackLink from "../../components/BackLink";
import ListWithLinks from "../../components/ListWithLinks";
import RemoveItem from "../../components/removeItem";
import { GET_STUDENT } from "../../queries/student";
import { IGroup, IStudent } from "../../types";

interface StudentData extends IStudent {
    group: IGroup;
}

const StudentsPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { loading, error, data } = useQuery<{ student: StudentData }>(
        GET_STUDENT,
        {
            variables: { studentId: Number(id) },
        }
    );

    if (loading) return "loading";

    if (error) return "error";

    const student = data && data.student;

    return (
        <main className="text-center">
            {student && (
                <>
                    <BackLink />
                    <RemoveItem id={student.id} type="student" />
                    <h1 className="text-3xl text-teal-800 pb-2 border-b-2 border-black">
                        {student.fullName}
                    </h1>

                    <ListWithLinks
                        title="Groups"
                        itemsWithTitle={[student.group]}
                    />
                </>
            )}
        </main>
    );
};

export default StudentsPage;
