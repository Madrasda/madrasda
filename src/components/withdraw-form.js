import React from 'react'

export default function WithdrawForm({ profit }) {
  return (
    <>
      <div className='mb-2 ml-2 '>
        {Number(profit) !== 0 && (
          <div className='bg-white text-black text-sm rounded-lg block w-full p-2.5'>
            Request for withdrawal with an outstanding profit ₹
            {Number(profit).toLocaleString("en-IN")}?
          </div>
        )}
        {Number(profit) === 0 && (
          <div className='bg-white text-black text-sm rounded-lg block w-full p-2.5'>
            You have no profits to withdraw from!
          </div>
        )}
      </div>
    </>
  );
}
