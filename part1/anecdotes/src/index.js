import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [highest, setHighest] = useState(0)
  const [highestIndex, setHighestIndex] = useState(0)

  const randomGenerator = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  
  const voteAnecdote = () => {
    let newVotes = [...votes]
    newVotes[selected] += 1
    if (newVotes[selected] > highest) {
      setHighest(newVotes[selected])
      setHighestIndex(selected)
    }
    setVotes(newVotes)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      has {votes[selected]} votes
      <br></br>
      <button onClick={voteAnecdote}>vote</button>
      <button onClick={randomGenerator}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      {props.anecdotes[highestIndex]}
    </div>
  )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)