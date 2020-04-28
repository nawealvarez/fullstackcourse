import React from 'react';

const Header = ({ course }) => {
    return (
      <>
        <h2>{course.name}</h2>
      </>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    const total = course.parts.reduce((acc, part) =>{
      return acc + part.exercises
    },0)
    return (
      <div>
        {course.parts.map((part)=>
          <Part key={part.id} part={part}/>)}
        <b><p>total {total} exercises</p></b>
      </div>
    )
  }
  
  const Course = ({course}) => {
    return(
      <>
        <Header  course={course}/>
        <Content course={course}/>
      </>
    )
  }

  export default Course;