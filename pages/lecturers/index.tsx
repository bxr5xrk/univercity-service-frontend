import { useQuery } from "@apollo/client";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import HomeItem from "../../components/HomeItem";
import { GET_LECTURERS } from "../../queries/lecturer";
import { ILecturer } from "../../types";

const Lecturers = () => {
    const { loading, error, data } = useQuery<{ lecturers: ILecturer[] }>(
        GET_LECTURERS
    );

    if (loading) return "loading";

    if (error) return "error";

    const lecturers = data && data.lecturers;

    return (
        <main>
            <Breadcrumbs linksArr={[{ title: "Lecturers" }]} />
            <section className="homeItem h-fit">
                <div className="top">
                    <h1 className=" text-xl">Lecturers</h1>
                </div>
                <div className="homeList">
                    {lecturers &&
                        lecturers.map((i) => (
                            <HomeItem
                                key={i.id}
                                title={i.fullName}
                                link={`lecturers/${i.id}`}
                            />
                        ))}
                </div>
            </section>
        </main>
    );
};

export default Lecturers;
