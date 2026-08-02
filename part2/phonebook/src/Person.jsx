const Person = ({name, number, id}) => {
  return (
    <>
      <p key={id}>{name} {number}</p>
    </>
  )
}

export default Person