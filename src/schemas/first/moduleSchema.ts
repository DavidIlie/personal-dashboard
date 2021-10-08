import * as yup from "yup";

export const moduleSchema = yup.object().shape({
    api_key: yup.string().required("This is required!"),
});
