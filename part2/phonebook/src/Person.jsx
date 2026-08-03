import persons from "./services/personService"

const Person = ({name, number, id}) => {
  return (
    <>
      <p key={id}>{name} {number}
        <button onClick={() => persons.deletePerson(id, name)}>delete</button>
      </p>
    </>
  )
}

export default Person