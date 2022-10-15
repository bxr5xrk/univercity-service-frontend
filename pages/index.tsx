import { useQuery } from "@apollo/client";
import { useRef, useState } from "react";
import CreateItem from "../components/createNewItem";
import HomeItem from "../components/HomeItem";
import { GET_ALL } from "../queries";
import { dataType, IGetAll } from "../types";

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const { loading, error, data } = useQuery<IGetAll>(GET_ALL);
    const typeRef = useRef<dataType>("group");

    if (loading) return "loading";

    if (error) return "error";

    const handleClick = (type: dataType) => {
        typeRef.current = type;

        setShowModal(true);
    };

    return (
        <div className="flex-row m-3">
            {data && (
                <>
                    <section className="homeItem">
                        <div className="top">
                            <h1>Groups</h1>

                            <svg
                                onClick={() => handleClick("group")}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 stroke-teal-800"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                        </div>
                        <div className="homeList">
                            {data.groups.map((i) => (
                                <HomeItem
                                    key={i.id}
                                    title={i.title}
                                    link={`groups/${i.id}`}
                                />
                            ))}
                        </div>
                    </section>
                    <section className="homeItem">
                        <div className="top">
                            <h1>Lecturers</h1>

                            <svg
                                onClick={() => handleClick("lecturer")}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 stroke-teal-800"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                        </div>
                        <div className="homeList">
                            {data.lecturers.map((i) => (
                                <HomeItem
                                    key={i.id}
                                    title={i.fullName}
                                    link={`lecturers/${i.id}`}
                                />
                            ))}
                        </div>
                    </section>
                    <section className="homeItem">
                        <div className="top">
                            <h1>Students</h1>

                            <svg
                                onClick={() => handleClick("student")}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 stroke-teal-800"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                        </div>
                        <div className="homeList">
                            {data.students.map((i) => (
                                <HomeItem
                                    key={i.id}
                                    title={i.fullName}
                                    link={`students/${i.id}`}
                                />
                            ))}
                        </div>
                    </section>
                    <section className="homeItem">
                        <div className="top">
                            <h1>Subjects</h1>

                            <svg
                                onClick={() => handleClick("subject")}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 stroke-teal-800"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                        </div>
                        <div className="homeList">
                            {data.subjects.map((i) => (
                                <HomeItem
                                    key={i.id}
                                    title={i.title}
                                    link={`subjects/${i.id}`}
                                />
                            ))}
                        </div>
                    </section>
                </>
            )}
            {showModal && (
                <CreateItem
                    setShowModal={setShowModal}
                    type={typeRef.current}
                />
            )}
        </div>
    );
};

export default Home;
