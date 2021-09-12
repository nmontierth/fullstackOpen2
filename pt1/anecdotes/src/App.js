import React, {useState} from 'react'

const Button = (props) => {
  let handleClick = props.handleClick
  let text = props.text

  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Anecdote = (props) => {
  return(
    <div>
      <div>{props.anecdote}</div>
      <div>has {props.voteCount} votes</div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often!',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleAnecdoteClick = () => {
    function randomInt(max) {
      return (
        Math.floor(Math.random() * max)
      )
    }
    return (
    setSelected(randomInt(anecdotes.length))
    )
  }

  const handleVoteClick = () => {
    const newAllVotes = [...allVotes]
    newAllVotes[selected] += 1
    setAllVotes(newAllVotes)
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} voteCount={allVotes[selected]}/>
      <div>
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={handleAnecdoteClick} text="next anecdote"/>
      </div>
      <Header text="Anecdote with most votes" />
      <Anecdote anecdote={anecdotes[allVotes.indexOf(Math.max(...allVotes))]} voteCount={allVotes[allVotes.indexOf(Math.max(...allVotes))]} />
    </div>
  )
}

export default App;
