import { useQuery } from "@apollo/client";
import HomeItem from "../components/HomeItem";
import Snackbar from "../components/snackbar";
import { GET_ALL } from "../queries";
import { IGetAll } from "../types";

const Home = () => {
    const { loading, error, data } = useQuery<IGetAll>(GET_ALL);

    if (loading) return "loading";

    if (error) return "error";

    return (
        <div className="flex-row m-3">
            {data && (
                <>
                    <section className="homeItem">
                        <h1>Groups</h1>
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
            {/* <Snackbar type="success" /> */}
        </div>
    );
};

export default Home;
