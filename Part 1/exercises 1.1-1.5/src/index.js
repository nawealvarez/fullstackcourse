import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props)=>{
  const {course} = props
  return(
    <h1>Hi! Welcome to {course.name} course</h1>
  )
}

const Part = (props) => {
  return (
    <p>Part: {props.name}. Number of exercises: {props.exercises}</p>
  )
}

const Content = (props) =>{
  const {parts} = props.parts
  return(
  <>
  <Part name={parts[0].name} exercises={parts[0].exercises}/> 
  <Part name={parts[1].name} exercises={parts[1].exercises}/> 
  <Part name={parts[2].name} exercises={parts[2].exercises}/> 
  </>
  )
}

const Total = (props) =>{
  const {parts} = props.parts
  return(
  <p>Number of total exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))