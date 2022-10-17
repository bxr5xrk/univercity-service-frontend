import { useQuery } from "@apollo/client";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import HomeItem from "../../components/HomeItem";
import { GET_GROUPS } from "../../queries/group";
import { IGroup } from "../../types";

const Groups = () => {
    const { loading, error, data } = useQuery<{ groups: IGroup[] }>(GET_GROUPS);

    if (loading) return "loading";

    if (error) return "error";

    const groups = data && data.groups;

    return (
        <main>
            <Breadcrumbs linksArr={[{ title: "Groups" }]} />
            <section className="homeItem h-fit">
                <div className="top">
                    <h1 className=" text-xl">Groups</h1>
                </div>
                <div className="homeList">
                    {groups &&
                        groups.map((i) => (
                            <HomeItem
                                key={i.id}
                                title={i.title}
                                link={`groups/${i.id}`}
                            />
                        ))}
                </div>
            </section>
        </main>
    );
};

export default Groups;
