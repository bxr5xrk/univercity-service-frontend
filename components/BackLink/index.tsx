import Link from "next/link";
import Router from "next/router";
import React from "react";

const BackLink = () => {
    const router = Router;

    return (
        <div className="flex gap-3">
            <Link href={"/"}>
                <p className=" cursor-pointer underline text-left">
                    To main page
                </p>
            </Link>
            <p
                onClick={() => router.back()}
                className=" cursor-pointer underline text-left"
            >
                Back
            </p>
        </div>
    );
};

export default BackLink;
