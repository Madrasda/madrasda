import React from 'react'

export default function AddVendorForm() {
  const [name, setName] = React.useState();
  const [cname,setCompanyName] = React.useState();
  const [curl, setCompanyUrl] = React.useState();
  const [gstin, setGstin] = React.useState();
  const [password, setpassword] = React.useState();
  
  return (
    <>
      <h2 className="ml-2  title-font font-medium text-sm">Vendor Display Name :</h2>
        <div className="mb-2 ml-2 ">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Enter your Display Name" />
        </div>
        <h2 className="ml-2  title-font font-medium text-sm">Company Name :</h2>
        <div className="mb-2 ml-2 ">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Enter your Company Name" />
        </div>
        <h2 className="ml-2  title-font font-medium text-sm">Company URL :</h2>
        <div className="mb-2 ml-2">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="www.example.com"/>
        </div>
        <h2 className="ml-2 title-font font-medium text-sm">GST IN :</h2>
        <div className="mb-2 ml-2">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="33XXXXXXXXXXXTN1X"/>
        </div>
        <h2 className="ml-2 title-font font-medium text-sm">Default Password</h2>
        <div className="mb-2 ml-2">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Password"/>
        </div>
    </>
  )
}
