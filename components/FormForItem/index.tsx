import { useQuery } from "@apollo/client";
import { FC, FormEvent } from "react";
import { GET_ALL } from "../../queries";
import { dataType, IGetAll } from "../../types";
import { CreateNewItem, variablesForCreating } from "../../utils/createItem";

interface FormProps {
    title: string;
    setTitle: (i: string) => void;
    type: dataType;
    groupId: number;
    setGroupId: (i: number) => void;
    setShowModal: (i: boolean) => void;
}

const FormForItem: FC<FormProps> = ({
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
            className="absolute flex flex-col gap-8 items-center top-1/4 left-1/4 right-1/4 w-100px bg-white border-[1px] border-teal-800 rounded-2xl p-9"
            onSubmit={(e) => handleCreate(e)}
        >
            <input
                type="text"
                maxLength={20}
                minLength={2}
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

export default FormForItem;
