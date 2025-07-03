import * as yup from "yup";

export const schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    email: yup.string().email("Invalid email").required("Email is Required"),
    subject: yup.string().required("Subject is Required"),   
    message: yup.string().required("Message is Required")   

});