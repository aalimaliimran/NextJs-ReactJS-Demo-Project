import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Head from 'next/head';
import { Checkbox, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {useForm } from 'react-hook-form';
import { getTermsConditionsData } from '../../api/tempApi';
import ScrollDialog from '../../../components/Common/UI/DialogBox/ScrollDialog';
import { useRouter } from 'next/router';
import axios from 'axios';
import BasicSnackbar from '../../../components/Common/UI/Snackbar/BasicSnackbar';


const Signup = () => {

/* Password show hide */
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
  /* Password show hide */
  /* React Hook Form */
  const { register, handleSubmit, getValues, watch, formState: { errors, isDirty, isValid }  } = useForm({
    mode: 'all',
  });
   /* React Hook Form */

  /* Terms & Condition Popup */
  const [termsConditionsData, setTermsConditionsData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      setTermsConditionsData(await getTermsConditionsData())
    } 
    fetchData()
  }, []) 
  const hasCheckedTermsConditions = watch("termsConditions");
  /* Terms & Condition Popup */

/* Snackbar */
const [open, setOpen] = useState({open:false, message:''});
const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpen(false);
};
/* Snackbar */

  /* OnSubmit Handler */
  const router = useRouter();
  const onSubmit = async (values) => {
    const apiEndPoint = `/api/auth/signup`;
    const data ={
      fname: values.fname,
      uname: values.uname,
      email: values.email,
      password: values.password,
      cpassword:values.cpassword,
      role:'user'
    }
    //console.log(data);

    await axios.post(apiEndPoint, data)
      .then(function (response) {
        router.replace('/dashboard')
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.data.message);
        //Snackbar Open
        setOpen({open:true, message: error.response.data.message});
      });
    }
  /* OnSubmit Handler */
  return (
    <>
    <Head>
    <title>Signup | Young Warriors</title>
    <meta name="description" content="A project of Young Warriors" />
  </Head>
  {open.message?.length > 0 &&
  <BasicSnackbar
      vertical= 'top'
      horizontal= 'right'
      open={open}
      severity="error"
      message={open.message}
      onClose={handleClose}
    />}
    <main className="auth">
    <section>
        <div className="container">
          <div className="row">
            <div className="col-6 col_left">
              
              <div className="side_image" style={{backgroundImage: 'url(/images/illustration-signup.jpg)', backgroundSize: 'cover'}}></div>
            </div>
            <div className="col-xl-4 col_right">
              <div className="card">
                <div className="card-header">
                  <h4>Sign Up</h4>
                  <p>Enter below details to register</p>
                </div>
                <div className="card-body">
                  <form role="form" onSubmit={handleSubmit(onSubmit)} id="signupForm">
                  <div className="form_row">
                      <TextField
                          variant="standard"
                          label="Full Name"
                          fullWidth
                          placeholder="Enter your full name"
                          {...register("fname", {
                            required: "Required field",
                            pattern: {
                              value: /^([A-Za-z]+[.]?[ ]?|[A-Za-z]+['-]?)+$/,
                              message: "Characters & dot/hyphen allowed",
                            },
                          })}
                          error={errors?.fname}
                          helperText={errors?.fname ? errors.fname.message : null}
                        />   
                  </div>
                  <div className="form_row">
          
                        <TextField
                          variant="standard"
                          label="Username"
                          fullWidth
                          placeholder="Enter your username"
                          {...register("uname", {
                            required: "Required field",
                            pattern: {
                              value: /^([A-Za-z0-9]+[_.-]?)+$/,
                              message: "Username may only contain alphanumeric characters or single hyphens/dots, and cannot begin or end with a hyphen. Spaces not allowed",
                            },
                          })}
                          error={errors?.uname}
                          helperText={errors?.uname ? errors.uname.message : null}
                        />  
                       
                  </div>
                  <div className="form_row">
                  <TextField
                          variant="standard"
                          label="Email"
                          fullWidth
                          
                          placeholder="Enter your email address"
                          {...register(`email`, {
                            required: `Required field`,
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: `Invalid email address`,
                            },
                          })}
                          
                          error={!!errors?.email}
                          helperText={
                            errors?.email ? errors.email.message : null
                          }
                        />
                  </div>  
                  <div className="form_row">
                  <TextField
                          variant="standard"
                          label="Password"
                          fullWidth  
                          placeholder="Enter your password"
                          type={showPassword ? `text` : `password`}
                          {...register(`password`, {
                            required: `Required field`,
                            pattern: {
                              value:
                                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                              message: `Password must contain UpperCase, LowerCase, Number/SpecialChar and min 8 Chars`,
                            },
                          })}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          error={!!errors?.password}
                          helperText={
                            errors?.password ? errors.password.message : null
                          }
                        />
                    </div>
                    <div className="form_row">
                    <TextField
                          variant="standard"
                          label="Confirm Password"
                          fullWidth  
                          placeholder="Enter your password"
                          type={showPassword ? `text` : `password`}
                          {...register(`cpassword`, {
                            required: `Required field`,
                            pattern: {
                              value:
                                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                              message: `Password must contain UpperCase, LowerCase, Number/SpecialChar and min 8 Chars`,
                            },
                            validate: (value) =>
                            value === getValues("password") || "password doesn't match."
                            
                          })}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          error={!!errors?.cpassword}
                          helperText={
                            errors?.cpassword ? errors.cpassword.message : null
                          }
                        />
                    </div>
                    <div className="form_row">
                    <FormControlLabel 
                    control={<Checkbox {...register("termsConditions")}/>} 
                    label={<Typography>I agree the <span>Terms and Conditions</span></Typography>} />
                    </div>
                  </form>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn" form="signupForm" 
                    disabled={!isDirty || !isValid || !hasCheckedTermsConditions}>Sign Up
                  </button>
                  <p>Already have an account?&nbsp;
                     <Link href="signin" shallow>Sign In</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
    </section>
  </main>
  {hasCheckedTermsConditions && 
  <ScrollDialog 
    title={termsConditionsData.title} 
    description={termsConditionsData.description}
    scrollType={'paper'}
    openState={true}
  />}
  
  </>
  )
}

export default Signup