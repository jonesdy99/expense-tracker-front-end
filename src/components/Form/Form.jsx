import React from 'react'

export default function Form() {
  return (
    <div className='flex justify-center max-w-sm mx-auto w-96'>
      <h1 className='font-bold pb-4 text-xl'>Transactions</h1>
      <form id='form'>
        <div className='flex gap-4'>
          <div className='flex'>
            <input type="text" placeholder='Salary...' className='ml-6 flex' />
          </div>
          <select>
          <option value="Investment" defaultValue>Investment</option>
          <option value="Investment">Expense</option>
          <option value="Investment">Liquid Cash</option>
          </select>
        </div>
      </form>
    </div>
  )
}
