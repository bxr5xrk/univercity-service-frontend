import Link from "next/link";
import React, { FC } from "react";

interface HomeItemProps {
    title: string;
    link: string;
}

const HomeItem: FC<HomeItemProps> = ({ title, link }) => {
    return (
        <Link href={link}>
            <div className="flex content-center justify-center rounded-2xl font-bold text-black border-[1px] border-teal-800 p-3 cursor-pointer hover:bg-teal-600 hover:text-white transition-all duration-300">
                <h3>{title}</h3>
            </div>
        </Link>
    );
};

export default HomeItem;
