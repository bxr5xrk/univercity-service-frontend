import Link from "next/link";
import React, { FC } from "react";

interface BreadcrumbsProps {
    linksArr: { href?: string; title: string }[];
}

const stylesForLink = "cursor-pointer text-gray-800 hover:underline";

const Breadcrumbs: FC<BreadcrumbsProps> = ({ linksArr }) => {
    return (
        <div className="flex gap-2 my-2">
            <Link href={"/"}>
                <p className={stylesForLink}>Main page</p>
            </Link>

            {linksArr.map((i) => (
                <>
                    <span>/</span>
                    {i.href ? (
                        <Link href={i.href}>
                            <p className={stylesForLink}>{i.title}</p>
                        </Link>
                    ) : (
                        <p className="font-bold text-teal-800">{i.title}</p>
                    )}
                </>
            ))}
        </div>
    );
};

export default Breadcrumbs;
