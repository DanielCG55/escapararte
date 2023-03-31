import { DefaultButton } from "./DefaultButton";
import { useForm, FormProvider } from "react-hook-form";
import { FormInput } from "./FormInput";
import { backendAPI } from "@/lib/api";
import { CardCategory } from "@/types/category";

export const CardForm: React.FC<{ category: CardCategory }> = ({
    category,
}) => {
    const methods = useForm();

    const {
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
    } = methods;

    const Submit = (category: string) =>
        handleSubmit(async (data) => {
            console.log({ ...data, imageSrc: "/logo.png", category });
            await backendAPI.post("/create_card", {
                ...data,
                imageSrc: "/logo.png",
                category,
            });
        });

    // const currentImage = watch("imageSrc");
    // const currentTitle = watch("title");
    // const currentAuthor = watch("author");
    // const currentDescription = watch("description");

    return (
        <>
            <form className="flex gap-5 m-10" onSubmit={Submit(category)}>
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
