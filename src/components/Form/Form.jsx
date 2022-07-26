import React from 'react'

export default function Form() {
  return (
    <div className='max-w-sm mx-auto w-96 flex-wrap'>
      <h1 className='font-bold pb-4 text-xl'>Transactions</h1>
      <form id='form'>
        <div className='flex gap-4 mb-8'>
          <div className=''>
            <input type="text" placeholder='Salary...' className='ml-6 bg-gray-800 rounded text-white' />
          </div>
          <select>
          <option value="Investment" defaultValue>Investment</option>
          <option value="Investment">Expense</option>
          <option value="Investment">Liquid Cash</option>
          </select>
          <div>
            <input type="text" placeholder='Amount' className='bg-gray-800 rounded text-white' />
          </div>
        </div>
      </form>
    </div>
  )
}
