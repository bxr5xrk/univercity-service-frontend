import { useQuery } from "@apollo/client";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import HomeItem from "../../components/HomeItem";
import { GET_SUBJECTS } from "../../queries/subject";
import { ISubject } from "../../types";

const Subjects = () => {
    const { loading, error, data } = useQuery<{ subjects: ISubject[] }>(
        GET_SUBJECTS
    );

    if (loading) return "loading";

    if (error) return "error";

    const subjects = data && data.subjects;

    return (
        <main>
            <Breadcrumbs linksArr={[{ title: "Subjects" }]} />
            <section className="homeItem h-fit">
                <div className="top">
                    <h1 className=" text-xl">Subjects</h1>
                </div>
                <div className="homeList">
                    {subjects &&
                        subjects.map((i) => (
                            <HomeItem
                                key={i.id}
                                title={i.title}
                                link={`subjects/${i.id}`}
                            />
                        ))}
                </div>
            </section>
        </main>
    );
};

export default Subjects;
