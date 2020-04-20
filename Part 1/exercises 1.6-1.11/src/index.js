import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({onClick, text}) =>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad, all}) => {
  if(good == 0 && bad === 0 && neutral ===0){
    return(
      <p>No feedback given</p>
    )
  }
  return(
    <table>
      <Statistic text='good' value={good}/>
      <Statistic text='neutral' value={neutral}/>
      <Statistic text='bad' value={bad}/>
      <Statistic text='all' value={all}/>
      <Statistic text='average' value={(good-bad)/all}/>
      <Statistic text='positive' value={good/all}/>
    </table>
  )
}

const Statistic = ({text, value}) => {
  return(
  <>  
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  </>
  )
}

const App = (props) =>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + bad + neutral

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
      <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
    </>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
