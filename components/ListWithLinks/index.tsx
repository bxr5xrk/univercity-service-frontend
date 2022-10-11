import Link from "next/link";
import { FC } from "react";

interface ListWithLinksProps {
    title: string;
    itemsWithTitle?: { title: string; id: number }[];
    itemsWithFullName?: { fullName: string; id: number }[];
}

const ListWithLinks: FC<ListWithLinksProps> = ({
    title,
    itemsWithFullName,
    itemsWithTitle,
}) => {
    return (
        <div className="flex-col">
            <h2 className="font-bold">{title}</h2>
            <div className="flex gap-3 justify-center my-3">
                {itemsWithFullName &&
                    itemsWithFullName.map((i) => (
                        <Link
                            key={i.id}
                            href={`/${title.toLowerCase()}/${i.id}`}
                        >
                            <div className="border-teal-800 p-2 border-[1px] flex rounded-2xl cursor-pointer hover:bg-teal-800 hover:bg-opacity-30">
                                <p>{i.fullName}</p>
                            </div>
                        </Link>
                    ))}

                {itemsWithTitle &&
                    itemsWithTitle.map((i) => (
                        <Link
                            key={i.id}
                            href={`/${title.toLowerCase()}/${i.id}`}
                        >
                            <div className="border-teal-800 p-2 border-[1px] flex rounded-2xl cursor-pointer hover:bg-teal-800 hover:bg-opacity-30">
                                <p>{i.title}</p>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default ListWithLinks;
