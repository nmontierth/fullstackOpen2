import React from 'react';

const Course = ({course}) => {
    return(
      <div>
        <Header name={course.name} />
        <Content contents={course.parts}/>
        <Total contents={course.parts} />
      </div>
    )
}
  
const Header = ({name}) => {
    return(
      <div>
        <h1>{name}</h1>
      </div>
    )
}
  
const Content = ({contents}) => {
    
    return(
      <div>
        {contents.map((content, i) => 
            <Part key={i} name={content.name} exercises={content.exercises} />
        )}
      </div>
    )
}
  
const Part = ({name,exercises}) => {
    
    return(
      <div>
        <p> {name} {exercises}</p>
      </div>
    )
}

const Total = ({contents}) => {
    let exercises = []
    let count = 0

    for (let content of contents) {
        count += 1
        exercises[count] = content.exercises
    }

    const reducer = (accumulator, currentValue) => 
        {return accumulator + currentValue}

    const totalExer = exercises.reduce(reducer,0)
    
    return(
        <div><b>total of {totalExer} exercises</b></div>
    )
}

export default Course