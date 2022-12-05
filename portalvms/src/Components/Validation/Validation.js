import * as Yup from "yup";

export const signupSchema = Yup.object({
    first_Name:Yup.string().min(3).max(20).required("Please enter your first name."),
    last_Name:Yup.string().min(3).max(30).required("Please enter your last name."),
    phone_number:Yup.number().required("Please enter mobile number."),
    email:Yup.string().email().required("Please enter your email id."),
    company_name:Yup.string().min(4).max(70).required("Please enter company name."),
    password:Yup.string().min(6).required("Please enter password"),
    confirm_password:Yup.string().min(6).required().oneOf([Yup.ref("password"),null],"Password must match")
})

export const company_Schema =Yup.object({
    company_n :Yup.string().min(4).max(70).required("Please enter company name."),
    floor_number:Yup.string().min(1).max(20).required("Please enter your floor Number."),
    address_official:Yup.string().min(3).max(20).required("Please enter your official Addresss"),
    address_N:Yup.string().min(3).max(20).required("Please enter your address."),
    email_id:Yup.string().email().required("Please enter your email id."),
    phone_numberr:Yup.number().required("Please enter mobile number."),
    building_name:Yup.string().min(4).max(70).required("Please enter building name."),

})


