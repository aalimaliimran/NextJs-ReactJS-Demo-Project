import React, { useEffect, useState } from 'react';
import { getUserData } from "./api";
import { SigninForm } from "./SigninForm";

export default function Signin() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setData(await getUserData())
    } 
    fetchData()
  }, []) 

  return data ? <SigninForm preloadedValues={data}/> : <div>Loading...</div>
}