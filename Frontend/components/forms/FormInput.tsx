import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const FormInput: React.FC<{
    name: string;
    label: string;
    required: string;
}> = ({ name, label, required }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="mb-3 flex flex-col gap-2"
        >
            <label className="font-bold text-slate-600">{label}</label>
            <input
                className="border border-solid rounded-2xl border-slate-400 px-2 py-2"
                type="text"
                {...register(name, {
                    required,
                })}
            />
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => (
                    <p className="text-rose-500">{message}</p>
                )}
            />
        </motion.div>
    );
};
