import { useMutation } from "@apollo/client";
import React, { FC, useState } from "react";
import { CREATE_GROUP } from "../../queries/mutations";

const ModalCreate: FC = () => {
    const [title, setTitle] = useState("");

    const [CreateGroup, { data, loading, error }] = useMutation(CREATE_GROUP, {
        variables: {
            createGroupInput: {
                title,
            },
        },
    });

    if (loading) return <p>Submitting...</p>;
    if (error) return <p>{`Submission error! ${error.message}`}</p>;

    // console.log(data);

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    CreateGroup({
                        variables: {
                            createGroupInput: {
                                title,
                            },
                        },
                    });
                }}
            >
                <input
                    type="text"
                    max={20}
                    min={2}
                    placeholder="enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ModalCreate;
