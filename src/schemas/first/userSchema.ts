import * as yup from "yup";

export const userSchema = yup.object().shape({
    email: yup.string().email().min(3).max(500).required(),
    password: yup.string().min(5).max(1000).required(),
    confirmPassword: yup
        .string()
        .min(5)
        .max(1000)
        .oneOf([yup.ref("password"), null], "Passwords must match!")
        .required(),
});
