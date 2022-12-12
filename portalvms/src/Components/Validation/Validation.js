import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const signupSchema = Yup.object({
    first_Name:Yup.string().min(3).max(20).required("Please enter your first name.").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    last_Name:Yup.string().min(3).max(30).required("Please enter your last name.").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    phone_number:Yup.string().min(10).required("Please enter mobile number.").matches(/^[0-9\s]+$/, "Only number are allowed"),
    email:Yup.string().email().required("Please enter your email id."),
    company_name:Yup.string().min(4).max(70).required("Please enter company name."),
    password:Yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Please enter strong password"
    ),
    confirm_password:Yup.string().min(6).required().oneOf([Yup.ref("password"),null],"Passwords don't match")
});

export const company_Schema =Yup.object({
    company_n :Yup.string().min(4).max(70).required("Please enter company name."),
    floor_number:Yup.string().min(1).max(20).required("Please enter your floor Number."),
    address_official:Yup.string().min(3).max(20).required("Please enter your official Addresss"),
    address_N:Yup.string().min(3).max(20).required("Please enter your address."),
    email_id:Yup.string().email().required("Please enter your email id."),
    phone_numberr:Yup.number().required("Please enter mobile number."),
    building_name:Yup.string().min(4).max(70).required("Please enter building name."),

})


