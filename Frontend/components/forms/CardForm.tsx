import { SubmitButton } from "./SubmitButton";
import { useForm, FormProvider } from "react-hook-form";
import { FormInput } from "./FormInput";
import { backendAPI } from "@/lib/api";
import { CardCategory } from "@/types/category";
import { useState } from "react";


export const CardForm: React.FC<{ category: CardCategory }> = ({
    category,
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const methods = useForm();

    const {
        watch,
        handleSubmit,
        reset,
        formState: { errors },
    } = methods;

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        try {
            await backendAPI.post("/create_card", {
                ...data,
                imageSrc: "/logo.png",
                category,
            });
            reset();
        } finally {
            setIsSubmitting(false);
        }
    };

    // Se usa para ver como se escribe en tiempo real(parecido al useState)
    // const currentTitle = watch("title");

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-5 m-10">
                    <FormProvider {...methods}>
                        <FormInput
                            name={"title"}
                            label={"Title"}
                            required={"Please name your creation"}
                        />
                        <FormInput
                            name={"author"}
                            label={"Author"}
                            required={"Your creator name"}
                        />
                        <FormInput
                            name={"description"}
                            label={"Description"}
                            required={
                                "Introduce your creation with a little description"
                            }
                        />
                    </FormProvider>
                </div>
                <SubmitButton
                    type="submit"
                    variant={isSubmitting ? "color" : "normal"}
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                    
                </SubmitButton>
            </form>
        </>
    );
};
