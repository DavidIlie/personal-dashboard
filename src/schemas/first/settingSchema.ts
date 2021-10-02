import * as yup from "yup";

export const settingSchema = yup.object().shape({
    name: yup.string().required("this is required"),
});
