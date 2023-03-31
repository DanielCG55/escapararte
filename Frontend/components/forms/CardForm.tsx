import { DefaultButton } from "./DefaultButton";
import { useForm, FormProvider } from "react-hook-form";
import { FormInput } from "./FormInput";
import axios from "axios";
import { useEffect, useState } from "react";

// Example 3 Fo

export const CardForm = () => {
    const methods = useForm();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitSuccessful },
    } = methods;

    const Submit = handleSubmit(async (data) => {
        await axios.post("http://localhost:5000/create_card", {
            ...data,
            imageSrc: "/logo.png",
            origin: window.location.href,
        });
    });

    const currentImage = watch("imageSrc");
    const currentTitle = watch("title");
    const currentAuthor = watch("author");
    const currentDescription = watch("description");

    return (
        <>
            <form className="flex gap-5" onSubmit={Submit}>
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
                <DefaultButton
                    type="submit"
                    variant={isSubmitSuccessful ? "color" : "normal"}
                >
                    Crear
                </DefaultButton>
            </form>
        </>
    );
};
