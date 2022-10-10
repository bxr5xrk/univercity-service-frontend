import { gql, useQuery } from "@apollo/client";
import type { NextPage } from "next";

// export async function getStaticProps() {
//     const { data } = await client.query({
//         query: gql`
//             query Groups {
//                 groups {
//                     id
//                     title
//                     students {
//                         fullName
//                     }
//                     lecturers {
//                         fullName
//                     }
//                 }
//             }
//         `,
//     });

//     if (!data) {
//         return { notFound: true };
//     }

//     return {
//         props: {
//             groups: data,
//         },
//     };
// }

const GET_GROUPS = gql`
    {
        groups {
            id
            title
        }
    }
`;

const Home = () => {
    const { loading, error, data } = useQuery(GET_GROUPS);

    if (loading) return "loading";

    if (error) return "error";
 
    console.log(data);

    return (
        <div className="text-center">
            <h1>Next app</h1>
        </div>
    );
};

export default Home;
