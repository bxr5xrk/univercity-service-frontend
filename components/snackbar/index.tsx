import { FC } from "react";

interface SnackbarProps {
    type: "success" | "error";
}

const Snackbar: FC<SnackbarProps> = ({ type }) => {
    return (
        <div
            className={`absolute flex p-3 left-3 bottom-3 rounded-md ${
                type === "success" ? " bg-green-600" : "bg-red-600"
            }`}
        >
            <h3 className="text-center font-bold text-white">
                {type === "success" ? "Success 👍" : "Error 👎"}
            </h3>
        </div>
    );
};

export default Snackbar;
