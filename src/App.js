import logo from './logo.svg'
import './App.css'
import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    { id: 1, title: 'Food', amount: 301, date: new Date() },
    { id: 2, title: 'Toilet Paper', amount: 300, date: new Date() },
    { id: 3, title: 'Car Insurance', amount: 300, date: new Date() },
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
          Learn React
        </a>
      </header>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </div>
  )
}

export default App
