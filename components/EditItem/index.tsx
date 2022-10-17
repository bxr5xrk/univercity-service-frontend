import React, { FC, MouseEvent, useState } from "react";
import { dataType } from "../../types";

interface EditItemProps {
    type: dataType;
    id: number;
    oldTitle: string;
}

const EditItem: FC<EditItemProps> = ({ type, id, oldTitle }) => {
    const [title, setTitle] = useState(oldTitle);

    const handleClickWrapper = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) => {
        e.stopPropagation();
    };

    return (
        <>
            <div
                onClick={(e) => handleClickWrapper(e)}
                className="fixed top-0 left-0 bg-black opacity-30 right-0 bottom-0 w-full h-full"
            ></div>
        </>
    );
};

export default EditItem;
