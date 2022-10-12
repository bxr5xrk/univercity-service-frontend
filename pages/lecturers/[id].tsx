import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BackLink from "../../components/BackLink";
import ListWithLinks from "../../components/ListWithLinks";
import RemoveItem from "../../components/removeItem";
import { GET_LECTURER } from "../../queries/lecturer";
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
                    <RemoveItem id={lecturer.id} type="lecturer" />
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
