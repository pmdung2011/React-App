import logo from './logo.svg'
import './App.css'

import ExpenseItem from './components/ExpenseItem'
import Expenses from './components/Expenses'

function App() {
  const expenses = [
    { id: 1, title: 'Food', amount: 500, date: new Date(2021, 6, 15) },
    {
      id: 2,
      title: 'Toilet Paper',
      amount: 20,
      date: new Date(2021, 6, 17),
    },
    { id: 3, title: 'Car Insurance', amount: 300, date: new Date(2021, 6, 20) },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Expenses Tracker
        </a>
        <Expenses items={expenses} />
      </header>
    </div>
  )
}

export default App
