import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const FormInput: React.FC<{
    name: string;
    label: string;
    required: string;
}> = ({ name, label, required }) => {
    const { register, formState: { errors } } = useFormContext();

    const variants = {
        hidden: { x: 50, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    }

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="mb-0 flex flex-col gap-2"
        >
            <label className="font-bold text-black">{label}</label>
            <input
                className="border border-solid rounded-lg border-slate-400 px-5 py-1 text-xl"
                type="text"
                {...register(name, { required })}
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