import React from "react";
import "./Login.css";
import Logo from "./logo.jpeg";
// import Alert from '@mui/material/Alert';
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import { Formik } from "formik";
import { loginSchema } from "./Schema/Login";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  return (
    <div className="parent">
      <div className="container">
        <div className="image">
          <img src={Logo} alt="logo"></img>
        </div>
        {/* *************FormArea**************/}
        <Formik
          initialValues={{ mobileNumber: "", password: "" }}
          onSubmit={async(values) => {
            // values.preventDefault()
            const mobileNumber = values.mobileNumber.toString();
            const password = values.password.toString();

            try{ 
              const res=await axios({
              method: "POST",
              url: "https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-5eb492b6-735e-4a32-8582-c80db698fb7e/merchant/login",
              data: {
                username: mobileNumber,
                password: password,
              },
              headers: { "Content-Type": "application/json" },
              })

              if (res.data.status === true) {
                toast.success('Login successful!');
                console.log(res);
              } else {
                toast.error('Login failed!');
                console.log(res.data.status);
                console.log(res)
              }
            }
            catch (error) {
              console.error(error);
            }
              
          }
        }
          validationSchema={loginSchema}
        >
          {(props) => (
            <div className="formArea">
              <form onSubmit={props.handleSubmit}>
                {/**************PhoneNumber Input***********/}
                <div className="formControl">
                  <TextField
                    id="outlined-mobileNumber-input"
                    label="MobileNumber"
                    type="text"
                    name="mobileNumber"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.mobileNumber}
                  />
                  {props.touched.mobileNumber && props.errors.mobileNumber && (
                    <div style={{ color: "red" }}>
                      {props.errors.mobileNumber}
                    </div>
                  )}
                </div>
                {/**************password ************/}
                <div className="formControl">
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password}
                  />
                  {/* {console.log(props.values)} */}
                  {props.touched.password && props.errors.password && (
                    <div style={{ color: "red" }}>{props.errors.password}</div>
                  )}
                </div>
                {/* *************button**************/}
                <div className="btn">
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "20px",
                      width: "100px",
                      backgroundColor: "#FAB613",
                      color: "#503085",
                      fontWeight: "bold",

                      "&MuiButtonBase-root:hover": { backgroundColor: "red" },
                    }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          )}
        </Formik>
        {/* *************Login Route**************/}
        <div className="loginRoute">
          <Typography variant="subtitle2" gutterBottom>
            already a member ?{" "}
            <Link href="#" underline="hover" color="blue">
              {"Log in"}
            </Link>
          </Typography>
        </div>
        {/* *************Terms&Condition**************/}
        <footer className="termsConditon">
          <Typography variant="body2" gutterBottom>
            By Submiting you agree to
            <br />
            <Link href="#" underline="hover" color="blue">
              {" Terms & Conditon"}
            </Link>
            {" and "}
            <Link href="#" underline="hover" color="blue">
              {"Privacy Policy"}
            </Link>
          </Typography>
        </footer>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
