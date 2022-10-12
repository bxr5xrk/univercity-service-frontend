import { useMutation } from "@apollo/client";
import React, { FC, useState } from "react";
import { GET_ALL } from "../../queries";
import { CREATE_GROUP } from "../../queries/group";

interface ModalCreateProps {
    setShowModal: (i: boolean) => void;
}

const ModalCreate: FC<ModalCreateProps> = ({ setShowModal }) => {
    const [title, setTitle] = useState("");

    const [CreateGroup, { data, loading, error }] = useMutation(CREATE_GROUP, {
        variables: {
            createGroupInput: {
                title,
            },
        },
        refetchQueries: [{ query: GET_ALL }],
    });

    if (loading) return <p>Submitting...</p>;
    if (error) return <p>{`Submission error! ${error.message}`}</p>;

    return (
        <>
            <div
                onClick={() => setShowModal(false)}
                className="fixed top-0 left-0 bg-black opacity-30 right-0 bottom-0 w-full h-full"
            ></div>
            <form
                className="absolute top-1/4 left-1/4 right-1/4 w-100px flex justify-center bg-white border-[1px] border-teal-800 rounded-2xl p-9"
                onSubmit={(e) => {
                    e.preventDefault();
                    CreateGroup({
                        variables: {
                            createGroupInput: {
                                title,
                            },
                        },
                    });
                    setShowModal(false);
                }}
            >
                <input
                    type="text"
                    max={20}
                    min={2}
                    placeholder="enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default ModalCreate;
