import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props)=>{
  return(
    <h1>Hi! Welcome to {props.name} course</h1>
  )
}

const Content = (props) =>{
  return(
  <p>Part: {props.part} Number of exercises: {props.exer}</p>
  )
}

const Total = (props) =>{
  return(
  <p>Number of Total exercises {props.all}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header name={course}/>
      <Content part={part1} exer={exercises1}/>
      <Content part={part2} exer={exercises2}/>
      <Content part={part3} exer={exercises3}/>
      <Total all={exercises1 + exercises2 + exercises3}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))