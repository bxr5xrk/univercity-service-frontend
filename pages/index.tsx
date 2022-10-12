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
                        <h1>Groups</h1>
                        <button onClick={() => handleClick("group")}>+</button>
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
                        <h1>Lecturers</h1>
                        <button onClick={() => handleClick("lecturer")}>
                            +
                        </button>
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
                        <h1>Students</h1>
                        <button onClick={() => handleClick("student")}>
                            +
                        </button>
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
                        <h1>Subjects</h1>
                        <button onClick={() => handleClick("subject")}>
                            +
                        </button>
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
