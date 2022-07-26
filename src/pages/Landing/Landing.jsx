import styles from './Landing.module.css'
import Graph from '../../components/Graph/Graph'
import Form from '../../components/Form/Form'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {/* <h1>hello, {user ? user.name : 'friend'}</h1> */}
      <div className='container mx-auto max-w-6xl text-center drop-shadow-lg'>
      </div>
      <div>
        <Graph></Graph>
        <Form></Form>
      </div>
    </main>
  )
}

export default Landing
