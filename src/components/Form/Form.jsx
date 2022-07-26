import React from 'react'

export default function Form() {
  return (
    <div className='max-w-sm mx-auto w-96 flex-wrap'>
      <h1 className='font-bold pb-4 text-xl'>Transactions</h1>
      <form id='form'>
        <div className='grid gap-4 mb-8'>
          <div className=''>
            <input type="text" placeholder='Transaction type ex.(Rent, salary, investment)' className=' bg-gray-800 rounded text-white w-full px-1 focus: outline-none' />
          </div>
          <select className='drop-shadow-xl w-full focus:outline-none'>
          <option value="Investment" defaultValue>Investment</option>
          <option value="Investment">Expense</option>
          <option value="Investment">Savings</option>
          </select>
          <div>
            <input type="text" placeholder='Amount...' className='bg-gray-800 rounded text-white w-full px-1 focus: outline-none' />
          </div>
          <div className="submit-btn">
            <button className='grid border py-2 text-white bg-indigo-500 w-full'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}
