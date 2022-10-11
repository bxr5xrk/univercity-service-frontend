import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL } from "../../queries";

const Home = () => {
    const { loading, error, data } = useQuery(GET_ALL);

    if (loading) return "loading";

    if (error) return "error";

    console.log(data);

    return <main>
    </main>;
};

export default Home;
