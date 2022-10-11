import React, { FC, useState } from "react";
import ModalCreate from "../../components/modalCreate";

const AdminDashboard: FC = () => {
    const [showModal, setShowModal] = useState(false);
    const generateList = (title: string) => {
        return (
            <section className="homeItem">
                <h1>{title}</h1>
                <div className="homeList">
                    <button onClick={() => setShowModal(true)}>
                        Add {title.toLowerCase()}
                    </button>
                    <button>Edit {title.toLowerCase()}</button>
                    <button>Remove {title.toLowerCase()}</button>
                </div>
            </section>
        );
    };

    return (
        <div className="flex-row m-3">
            {generateList("Group")}
            {generateList("Student")}
            {generateList("Lecturer")}
            {generateList("Subject")}

            {showModal && (
                <ModalCreate
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            )}
        </div>
    );
};

export default AdminDashboard;
