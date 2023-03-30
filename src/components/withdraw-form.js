import React from 'react'

export default function WithdrawForm() {
  return (
    <>
      <h2 className="ml-2  title-font font-medium text-sm">Amount to be Withdrawn*</h2>
        <div className="mb-2 ml-2 ">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Enter the Amount" />
        </div>
        <h2 className="ml-2  title-font font-medium text-sm">Account Holder Name</h2>
        <div className="mb-2 ml-2">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Enter your Email Address"/>
        </div>
        <h2 className="ml-2 title-font font-medium text-sm">Account Number</h2>
        <div className="mb-2 ml-2">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Enter your Email Address"/>
        </div>
        <h2 className="ml-2 title-font font-medium text-sm">IFSC Code</h2>
        <div className="mb-2 ml-2">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Enter your Email Address"/>
        </div>
        <h2 className="ml-2 title-font font-medium text-sm">Bank Name</h2>
        <div className="mb-2 ml-2">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Enter your Email Address"/>
        </div>
        <h2 className="ml-2  title-font font-medium text-sm">Branch</h2>
        <div className="mb-2 ml-2">
            <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Enter your Email Address"/>
        </div>
    </>
  )
}
