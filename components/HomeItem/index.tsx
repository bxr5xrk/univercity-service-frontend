import Link from "next/link";
import Router from "next/router";
import React, { FC } from "react";

interface HomeItemProps {
    title: string;
    link: string;
}

const HomeItem: FC<HomeItemProps> = ({ title, link }) => {
    return (
        <Link href={link}>
            <div className="rounded-2xl font-bold text-black border-[1px] border-teal-800 p-3 cursor-pointer hover:bg-teal-600 hover:text-white transition-all duration-300">
                {title}
            </div>
        </Link>
    );
};

export default HomeItem;
