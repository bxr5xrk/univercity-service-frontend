import { useQuery } from "@apollo/client";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import HomeItem from "../../components/HomeItem";
import { GET_STUDENTS } from "../../queries/student";
import { IStudent } from "../../types";

const Students = () => {
    const { loading, error, data } = useQuery<{ students: IStudent[] }>(
        GET_STUDENTS
    );

    if (loading) return "loading";

    if (error) return "error";

    const students = data && data.students;

    return (
        <main>
            <Breadcrumbs linksArr={[{ title: "Students" }]} />
            <section className="homeItem h-fit">
                <div className="top">
                    <h1 className=" text-xl">Students</h1>
                </div>
                <div className="homeList">
                    {students &&
                        students.map((i) => (
                            <HomeItem
                                key={i.id}
                                title={i.fullName}
                                link={`students/${i.id}`}
                            />
                        ))}
                </div>
            </section>
        </main>
    );
};

export default Students;
