import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'
import Labels from '../Labels/Labels'

Chart.register(ArcElement)


const userData = {
  data: {
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 10,
      borderRadius: 50,
      spacing: 15,
    }]
  },
  options: {
    cutout: 205,
    radius: 225,
  }
}

export default function Graph() {
  return (
    <div className='flex justify-center max-w-xs mx-auto'>
      <div className='item'>
        <div className='chart relative'>
          <Doughnut {...userData}></Doughnut>
          <h3 className='grid justify-center mb-4 font-bold title'>Total
            <span className='block text-3xl text-emerald-400'>${0}</span>
          </h3>
        </div>
        <div className='flex justify-center py-10 gap-4'>
          <Labels></Labels>
        </div>
      </div>
    </div>
  )
}
