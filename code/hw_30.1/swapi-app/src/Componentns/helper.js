import * as yup from "yup";

const regx = /^([a-z]{3,})\/[0-9]{1,3}$/gim;

export const addressSchema = yup.object().shape({
  address: yup
    .string()
    .required("Field is required.")
    .min(5, "The field must contain at least 5 characters.")
    .max(50, "The field must contain no more than 50 characters.")
    .matches(regx, "The field contant is invalid."),
});
