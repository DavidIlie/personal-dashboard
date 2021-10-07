import * as yup from "yup";

export const settingSchema = yup.object().shape({
    name: yup.string().required("this is required"),
    default_location: yup.string().required("this is required"),
});
