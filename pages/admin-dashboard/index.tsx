import React, { FC } from "react";
import ModalCreate from "../../components/modalCreate";

const generateList = (title: string) => {
    return (
        <section className="homeItem">
            <h1>{title}</h1>
            <div className="homeList">
                <button>Add {title.toLowerCase()}</button>
                <button>Edit {title.toLowerCase()}</button>
                <button>Remove {title.toLowerCase()}</button>
            </div>
        </section>
    );
};

const AdminDashboard: FC = () => {
    return (
        <div className="flex-row m-3">
            {generateList("Group")}
            {generateList("Student")}
            {generateList("Lecturer")}
            {generateList("Subject")}

            <ModalCreate />
        </div>
    );
};

export default AdminDashboard;
