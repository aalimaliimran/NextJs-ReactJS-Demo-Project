import React, { useEffect, useState } from 'react';
import { getRememberMeData } from "../../api/tempApi";
import { SigninForm } from "./SigninForm";

export default function Signin() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setData(await getRememberMeData())
    } 
    fetchData()
  }, []) 

  return data ? <SigninForm preloadedValues={data}/> : <div>Loading...</div>
}