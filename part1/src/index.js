import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props)=>{
  return(
    <h1>Hi! Welcome to {props.course} course</h1>
  )
}

const Part = (props) => {
  return (
    <p>Part: {props.name} Number of exercises: {props.exercises}</p>
  )
}

const Content = (props) =>{
  const {parts} = props
  console.log(parts)
  return(
  <>
  <Part name={parts[0].name} exercises={parts[0].exercises}/> 
  <Part name={parts[1].name} exercises={parts[1].exercises}/> 
  <Part name={parts[2].name} exercises={parts[2].exercises}/> 
  </>
  )
}

const Total = (props) =>{
  const {parts} = props
  return(
  <p>Number of Total exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))