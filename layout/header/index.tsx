import Link from "next/link";
import { FC } from "react";

const headerItems = [
    {
        link: "/",
        title: "HOME",
    },
    {
        link: "/admin-dashboard",
        title: "ADMIN PANEL",
    },
];

const Header: FC = () => {
    return (
        <header className="gap-3 text-center border-b-2 border-black pb-2 flex justify-left font-bold cursor-pointer">
            {headerItems.map((i) => (
                <Link key={i.link} href={i.link}>
                    <h3>{i.title}</h3>
                </Link>
            ))}
        </header>
    );
};

export default Header;
