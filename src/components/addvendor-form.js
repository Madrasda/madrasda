import { useState } from "react";
import React from 'react'
import { Button } from "@nextui-org/react";

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
        imgUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ7IryN086-2xO9kANHTceq_lWWljufT0K4z26rPWd-fK_gmy25",
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
        <h2 className="ml-2  title-font font-medium text-sm">Vendor Display Name :</h2>
        <div className="mb-2 ml-2 ">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Enter your Display Name" onChange={
              (e) => setName(e.target.value)
            } />
        </div>
        <h2 className="ml-2  title-font font-medium text-sm">Vendor Email :</h2>
        <div className="mb-2 ml-2 ">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Enter your Email Address" onChange={
              (e) => setEmail(e.target.value)
            } />
        </div>
        <h2 className="ml-2  title-font font-medium text-sm">Company Name :</h2>
        <div className="mb-2 ml-2 ">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Enter your Company Name" onChange={
              (e) => setCompanyName(e.target.value)
            }/>
        </div>
        <h2 className="ml-2  title-font font-medium text-sm">Company URL :</h2>
        <div className="mb-2 ml-2">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="www.example.com" onChange={
              (e) => setCompanyUrl(e.target.value)
            }/>
        </div>
        <h2 className="ml-2 title-font font-medium text-sm">GST IN :</h2>
        <div className="mb-2 ml-2">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="33XXXXXXXXXXXTN1X" onChange={
              (e) => setGst(e.target.value)
            }/>
        </div>
        <h2 className="ml-2 title-font font-medium text-sm">Default Password</h2>
        <div className="mb-2 ml-2">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Password" onChange={
              (e) => setPassword(e.target.value)
            }/>
        </div>
        <Button auto
          type="submit"
          style={{
            background: "#A5153F",
          }}>
            Add Vendor
        </Button>
    </form>
  )
}
