import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props)=>{
  return(
    <h1>Hi! Welcome to {props.name} course</h1>
  )
}

const Part = (props) => {
  return (
    <p>Part: {props.part} Number of exercises: {props.exer}</p>
  )
}

const Content = (props) =>{
  return(
  <>
  <Part part={props.part1} exer={props.exer1}/>
  <Part part={props.part2} exer={props.exer2}/>
  <Part part={props.part3} exer={props.exer3}/>
  </>
  )
}

const Total = (props) =>{
  return(
  <p>Number of Total exercises {props.all}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name :'Fundamentals of React',
    exercises : 10}
  const part2 = {
    name:'Using props to pass data',
    exercises : 7}
  const part3 = {
    name:'State of a component',
    exercises : 14}

  return (
    <>
      <Header name={course}/>
      <Content part1={part1.name} exer1={part1.exercises} part2={part2.name} exer2={part2.exercises} part3={part3.name} exer3={part3.exercises}/>
      <Total all={part1.exercises + part2.exercises + part3.exercises}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))