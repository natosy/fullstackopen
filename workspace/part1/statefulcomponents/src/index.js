import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({ clicks }) => {
  // displays the value for the clicker
  return (
    <div>
      {clicks}
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>Click a button to use the app</div>
    )
  }
  return (
    <div>
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({
    top: 0,
    bottom: 0
  })
  const [allClicks, setAllClicks] = useState([])

  const handleBottomClick = () => {
    setAllClicks(allClicks.concat('B'))
    setClicks({ ...clicks, bottom: clicks.bottom + 1 })
  }

  const handleTopClick = () => {
    setAllClicks(allClicks.concat('T'))
    setClicks({ ...clicks, top: clicks.top + 1 })
  }

  const resetClicks = () => {
    setAllClicks([])
    setClicks({ top: 0, bottom: 0 })
  }


  return (
    <div>
      <Display clicks={clicks.top} />
      <Display clicks={clicks.bottom} />
      <Button handleClick={handleTopClick} text="top" />
      <Button handleClick={handleBottomClick} text="bottom" />
      <Button handleClick={resetClicks} text="reset" />
      <History allClicks={allClicks} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
