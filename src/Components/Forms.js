import Logo from "./logo.jpeg";
import './Login.css'
 import Button from "@mui/material/Button";
import * as Yup from "yup"
import TextField from "@mui/material/TextField";
import {Formik,Form,ErrorMessage, Field} from 'formik';
import { createRef, useRef } from "react";
const initialValues = { mobileNumber: " ", password: "" };
const onSubmit = (values) => {
       console.log(values);};
       const validate = (values) => {
        let errors = {};
        if (!values.mobileNumber) {
          errors.mobileNumber = "Required";
        } else if (values.mobileNumber.length !== 10) {
          errors.mobileNumber = "Please Enter valid Number";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        return errors;
      };
      const validateSchema=Yup.object({
        mobileNumber:Yup.number().required("Required"),
        password:Yup.string().required("Required")
      })
const Forms = () => {
  const formref=createRef()
  return (
    <>
    <div className="container">
      <div className="image">
        <img src={Logo} alt="logo"></img>
      </div>  
      <Formik
      innerRef={formref}
      initialValues={initialValues}
      // validate={validate}
      validateSchema={validateSchema}
      onSubmit={onSubmit}>
                {/* *************FormArea**************/}
                <div className="formArea">
          <Form >
            {/**************PhoneNumber Input***********/}
            <div className="formControl">
            <Field
              id="outlined-MobileNumber-input"
              label="Mobile Number"
              type="text"
              name="mobileNumber"
            />
            <ErrorMessage name="mobileNumber"/>
            </div>
            {/**************password ************/}
            <div className="formControl">
            <Field
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              name="password"
            />
            <ErrorMessage name="password"/>
            </div>
                        {/* *************button**************/}
                        <div className="btn">
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  width: "150px",
                  backgroundColor: "#FAB613",
                  color: "#503085",
                  fontWeight: "700px",
                  "&MuiButtonBase-root:hover": { backgroundColor: "none" },
                }}
              >
                Submit &gt;
              </Button>
            </div>
          </Form>
        </div>
      </Formik>
      </div>
    </>
  );
};

export default Forms;
