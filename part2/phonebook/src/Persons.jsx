import Person from "./Person"

const Persons = ({personsToShow}) => {
  return (
    <>
      {personsToShow.map((person) => (
        <Person 
          name={person.name}
          number={person.number}
          id={person.id}
        />
      ))}
    </>
  )
}

export default Persons