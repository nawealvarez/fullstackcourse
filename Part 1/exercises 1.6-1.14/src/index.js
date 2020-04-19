import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) =>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const Display = ({text, value}) => {
  return(
  <p>{text}  {value}</p>
  )
}

const App = () =>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const plusGood = () =>{
    setGood(good + 1)
  }
  const plusNeutral = () => {
    setNeutral(neutral + 1)
  }
  const plusBad = () => {
    setBad(bad + 1)
  }

  return(
    <>
      <div>
        <h1>Give feedback</h1>
      </div>
      <Button onClick={plusGood} text='good'/>
      <Button onClick={plusNeutral} text='neutral'/>
      <Button onClick={plusBad} text='bad'/>
      <div>
        <h2>statistics</h2>
      </div>
      <Display text='good' value={good}/>
      <Display text='neutral' value={neutral}/>
      <Display text='bad' value={bad}/>

    </>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
