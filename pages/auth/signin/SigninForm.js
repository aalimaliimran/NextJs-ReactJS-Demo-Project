import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';

import {
  Visibility,
  VisibilityOff,
  Facebook,
  Google,
  LinkedIn,
  GitHub,
  Twitter,
} from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';


export default function SigninForm({preloadedValues}) {

  /* React Hook Form */
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: `all`,
    defaultValues: preloadedValues,
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    if (data.remember) {
      const rememberObj = {
        email: data.email,
        password: data.password,
      };

      localStorage.setItem(`Remember`, JSON.stringify(rememberObj));
    }
  };
   /* React Hook Form */

                      
                      
   /* Social Logins */
  const providers = [
    {
      name: 'facebook',
      Icon: Facebook,
    },
    {
      name: 'linkedin',
      Icon: LinkedIn,
    },
    {
      name: 'github',
      Icon: GitHub,
    },
    {
      name: 'twitter',
      Icon: Twitter,
    },
    {
      name: 'google',
      Icon: Google,
    },
  ]

  const handleOAuthSignIn = (provider) => () => signIn(provider, { callbackUrl : process.env.BASE_URL})
    
	
  /* Social Logins */

  return (
    <>
      <Head>
        <title>Signin | Young Warriors</title>
        <meta name="description" content="A project of Young Warriors" />
      </Head>
      
      <main className="auth">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-6 col_left">
                <div
                  className="side_image"
                  style={{
                    backgroundImage: `url(/images/illustration-signin.jpg)`,
                    backgroundSize: `cover`,
                  }}
                ></div>
              </div>
              <div className="col-xl-4 col_right">
                <div className="card">
                  <div className="card-header">
                    <h4>Sign In</h4>
                    <p>Enter your email and password to login</p>
                  </div>
                  <div className="card-body">
                    <form
                      role="form"
                      onSubmit={handleSubmit(onSubmit)}
                      id="signinForm"
                    >
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
                      <div className="form_row flex_row">
                        <FormControlLabel
                          control={<Checkbox {...register(`remember`)} />}
                          label="Remember me"
                        />
                        <Link href="forgot-password" className="forgot_link" shallow>
                          Forgot Password?
                        </Link>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <button
                      type="submit"
                      form="signinForm"
                      className="btn"
                    
                    >
                      Sign In
                    </button>

                    <p>
                      
                      Dont have an account?&nbsp;
                      <Link href="signup">Sign Up</Link>
                      
                    </p>
                    <div className="social_logins">
                    {providers.map(({ name, Icon }) => (
                      <Icon 
                        key={name} 
                        onClick={handleOAuthSignIn(name)}
                        />))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
