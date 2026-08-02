const Part = ({part, exercise, id}) => {
  return (
    <p key={id}>{part}: {exercise}</p>
  )
}

export default Part