import { css, cx } from "@emotion/css";

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
                "py-2 px-5 min-w-[5rem] font-bold rounded-2xl transition-all duration-300",
                selected && "border-[#f57c7c]",
                variant === "color"
                    ? "bg-[#8be686] border-[#8be686]"
                    : "border-2 boder-solid border-[#d4d4d4] bg-[#e9e9e9]"
            )}
            onClick={onClick}
            type={type}
            //TODO: Instalar react icons para los iconos
        >
            Delete
        </button>
    );
};
