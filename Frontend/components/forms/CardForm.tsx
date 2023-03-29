import { DefaultButton } from "./DefaultButton";
import { useForm, FormProvider } from "react-hook-form";
import { FormInput } from "./FormInput";
import axios from "axios";

// Example 3 Form - React Hook Form

export const CardForm = () => {
    const methods = useForm();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitSuccessful },
    } = methods;

    const submit = handleSubmit(async (data) => {
        await axios.post("http://localhost:5000/create_card", data);
        console.log(data);
    });

    const currentImage = watch("imageSrc");
    const currentTitle = watch("title");
    const currentAuthor = watch("author");
    const currentDescription = watch("description");

    return (
        <>
            <form className="flex   gap-5 w-full " onSubmit={submit}>
                <label htmlFor="img">Click here tu upload your image:</label>
                <input
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    onChange={(e) =>
                        methods.setValue("imageSrc", e.target.files[0])
                    }
                />

                <FormProvider {...methods}>
                    <FormInput
                        name={"imageSrc"}
                        label={`Image to upload`}
                        required={"Add the image its necessary"}
                    />

                    <FormInput
                        name={"title"}
                        label={"title of the picture"}
                        required={"Please name your creation"}
                    />
                    <FormInput
                        name={"author"}
                        label={"author"}
                        required={"Your creator name"}
                    />
                    <FormInput
                        name={"description"}
                        label={"description of the picture"}
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
