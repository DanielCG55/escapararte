import { cx } from "@emotion/css";
import { GiTrashCan } from "react-icons/gi";

type ButtonType = "button" | "submit" | "reset";

type ButtonVariant = "color" | "normal";

interface DeleteButtonProps {
    onClick: any;
    selected?: boolean;
    type?: ButtonType;
    variant?: ButtonVariant;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
    onClick,
    selected,
    type,
    variant = "normal",
}) => {
    return (
        <button
            className={cx(
<<<<<<< HEAD
                " h-16 w-16  mt-48 ml-20 flex justify-center items-center  font-bold rounded-2xl transition-all duration-300 ",
=======
                " h-16 w-16  mt-52 ml-20 flex justify-center items-center  font-bold rounded-2xl transition-all duration-300 ",
>>>>>>> dev
                selected && "border-[#f57c7c]",
                variant === "color"
                    ? "bg-[#8be686] border-[#8be686]"
                    : "border-2 boder-solid border-[#97979700] bg-[#e9e9e900] hover:scale-[3]"
            )}
            onClick={onClick}
            type={type}
        >
            <GiTrashCan size={50} color="#000000c3" />
        </button>
    );
};
