import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Head from 'next/head';
import {TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors, isDirty, isValid }  } = useForm({
    mode: 'all',
  });
  const onSubmit = (data) => {
    
  };
  return (
    <>
    <Head>
    <title>Forgot Password | Young Warriors</title>
    <meta name="description" content="A project of Young Warriors" />
  </Head>
    <main className="auth">
    <section>
        <div className="container">
          <div className="row">
            <div className="col-6 col_left">
              <div className="side_image" style={{backgroundImage: 'url(/images/illustration-verification.jpg)', backgroundSize: 'cover'}}></div>
            </div>
            <div className="col-xl-4 col_right">
              <div className="card">
                <div className="card-header">
                  <h4>Forgot Password</h4>
                  <p>Enter your email address</p>
                </div>
                <div className="card-body">
                  <form role="form" onSubmit={handleSubmit(onSubmit)} id="forgotForm">
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
                  
                  </form>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn" form="forgotForm" 
                    disabled={!isDirty || !isValid}>Send Email
                  </button>
                  <p>Back to &nbsp;
                     <Link href="signin" shallow>Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
    </section>
  </main> 
  </>
  )
}

export default ForgotPassword