import { cx, css } from "@emotion/css";

type ButtonType = "button" | "submit";

type ButtonVariant = "color" | "normal";

interface SubmitButtonProps {
    children: any;
    onClick?: any;
    selected?: boolean;
    type?: ButtonType;
    variant?: ButtonVariant;
}

const transitionGreen = css`
    animation: prueba 1s ease-in-out;

    @keyframes prueba {
        0% {
            background-color: #47e44f;
        }
        50% {
            background-color: #ffffff;
        }
    }
`;

export const SubmitButton: React.FC<SubmitButtonProps> = ({
    children,
    onClick,
    type,
    variant = "normal",
}) => {
    return (
        <div className="flex justify-center items-center">
            <button
                className={cx(
                    "uppercase px-4 py-4 font-bold rounded-lg transition-all duration-300 text-black border-2 border-[#c6c6c6]",
                    variant === "color" ? transitionGreen : "bg-[#ffffff]",
                    { "text-black": variant === "color" }
                )}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </div>
    );
};
