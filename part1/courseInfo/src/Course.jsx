import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({course, id}) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div key={id}>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total total={totalExercises}/>
    </div>
  )
}

export default Course