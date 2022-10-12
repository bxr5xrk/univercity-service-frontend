import { useQuery } from "@apollo/client";
import React, { FC, FormEvent, MouseEvent, useState } from "react";
import { GET_ALL } from "../../queries";
import { dataType, IGetAll } from "../../types";
import { CreateNewItem, variablesForCreating } from "../../utils/createItem";

interface CreateItemProps {
    setShowModal: (i: boolean) => void;
    type: dataType;
}

const CreateItem: FC<CreateItemProps> = ({ setShowModal, type }) => {
    const [title, setTitle] = useState("");
    const { data: groupData } = useQuery<IGetAll>(GET_ALL);
    const [groupId, setGroupId] = useState(
        groupData ? groupData.groups[0].id : 0
    );

    const handleClickWrapper = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) => {
        e.stopPropagation();
        setShowModal(false);
    };

    return (
        <>
            <div
                onClick={(e) => handleClickWrapper(e)}
                className="fixed top-0 left-0 bg-black opacity-30 right-0 bottom-0 w-full h-full"
            ></div>
            <Form
                title={title}
                setTitle={setTitle}
                type={type}
                groupId={groupId}
                setGroupId={setGroupId}
                setShowModal={setShowModal}
            />
        </>
    );
};

interface FormProps {
    title: string;
    setTitle: (i: string) => void;
    type: dataType;
    groupId: number;
    setGroupId: (i: number) => void;
    setShowModal: (i: boolean) => void;
}

const Form: FC<FormProps> = ({
    title,
    setTitle,
    type,
    groupId,
    setGroupId,
    setShowModal,
}) => {
    const { data, loading, error, createItem } = CreateNewItem(
        title,
        type,
        groupId
    );

    const handleCreate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createItem({
            variables: variablesForCreating(title, type, groupId),
        });
        setShowModal(false);

        setTimeout(() => {
            if (!error?.message) {
                setShowModal(false);
            }
        }, 2000);
    };

    const { data: groupData } = useQuery<IGetAll>(GET_ALL);

    return (
        <form
            className="absolute top-1/4 left-1/4 right-1/4 w-100px flex justify-center bg-white border-[1px] border-teal-800 rounded-2xl p-9"
            onSubmit={(e) => handleCreate(e)}
        >
            <input
                type="text"
                max={20}
                min={2}
                placeholder={`enter ${type} title`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
                required
            />
            {type === "student" && (
                <select
                    value={groupId}
                    onChange={(e) => setGroupId(Number(e.target.value))}
                >
                    {groupData?.groups.map((i) => (
                        <option value={i.id} key={i.id}>
                            {i.title}
                        </option>
                    ))}
                </select>
            )}

            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateItem;
