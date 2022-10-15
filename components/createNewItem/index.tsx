import { useQuery } from "@apollo/client";
import React, { FC, MouseEvent, useState } from "react";
import { GET_ALL } from "../../queries";
import { dataType, IGetAll } from "../../types";
import FormForItem from "../FormForItem";

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
            <FormForItem
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

export default CreateItem;
