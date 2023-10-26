const Header = (props) => {
  return (
    <div>
    <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = ({parts}) => {

}





const Total =({parts})=> {
  var total = 0;
  parts.forEach((part) => {
    total += part.exercises;
  })


 return(
  <div>
    <p>Number of exercises {total}</p>
  </div>
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
    <div>
    <Header course={course} />
    <Content parts={parts} />
    <Total parts={parts} />
    
  </div>
  )
}

export default App
