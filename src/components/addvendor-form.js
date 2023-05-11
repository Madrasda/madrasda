import { useState } from "react";
import React from 'react'
import { Button } from "@mui/material";

export default function AddVendorForm({onSubmit}) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const [companyUrl, setCompanyUrl] = useState(null);
  const [gst, setGst] = useState(null);
  const [password, setPassword] = useState(null);
  const [category, setCategory] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(
      {
        name: name,
        email: email,
        imgUrl: "",
        password: password,
        companyName: companyName,
        gstin: gst,
        companyUrl: companyUrl,
        category: category
      }
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='ml-2  title-font font-medium text-sm'>
        Display Name :
      </h2>
      <div className='mb-2 ml-2 '>
        <input
          type='text'
          className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
          placeholder='Enter your Display Name'
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <h2 className='ml-2  title-font font-medium text-sm'>Creator Email :</h2>
      <div className='mb-2 ml-2 '>
        <input
          type='text'
          className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
          placeholder='Enter your Email Address'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <h2 className='ml-2  title-font font-medium text-sm'>Creator Name :</h2>
      <div className='mb-2 ml-2 '>
        <input
          type='text'
          className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
          placeholder='Enter your Company Name'
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <h2 className='ml-2  title-font font-medium text-sm'>Company/Creator URL :</h2>
      <div className='mb-2 ml-2'>
        <input
          type='text'
          className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
          placeholder='www.example.com'
          onChange={(e) => setCompanyUrl(e.target.value)}
        />
      </div>
      <h2 className='ml-2 title-font font-medium text-sm'>GST IN :</h2>
      <div className='mb-2 ml-2'>
        <input
          type='text'
          className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
          placeholder='33XXXXXXXXXXXTN1X' maxLength={15}
          onChange={(e) => setGst(e.target.value)}
        />
      </div>
      <h2 className='ml-2 title-font font-medium text-sm'>Default Password</h2>
      <div className='mb-2 ml-2'>
        <input
          type='text'
          className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
      <Button /*{className='bg-primary text-white mx-auto w-full ' type='submit'}*/ 
        css={{ fontFamily: "$algeria" }}
        style={{
          background: "#FFA000",
          color: "white"
        }}
        type={'submit'}
        className={`font-bold text-white py-2 px-4 mr-2 mb-2`}>
        Add vendor
      </Button>
      </div>
    </form>
  );
}
