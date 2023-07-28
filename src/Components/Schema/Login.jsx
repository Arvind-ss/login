import * as Yup from'yup';
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const loginSchema=Yup.object({
    mobileNumber:Yup.string()
    .required("required")
    // .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, "too short")
    .max(11, "too long"),
    password:Yup.string().min(6,"Invalid Password").required("Required"),
})