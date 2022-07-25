import styles from './Landing.module.css'
import Graph from '../../components/Graph/Graph'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <div className='container mx-auto max-w-6xl text-center drop-shadow-lg'>
      <h2 className='text-4xl py-10 mb-10 bg-slate-800 text-white'>Expense Tracker</h2>
      </div>
      <div>
        <Graph></Graph>
      </div>
    </main>
  )
}

export default Landing
