import Person from "./Person"

const Persons = ({personsToShow}) => {
  return (
    <>
      {personsToShow.map((person) => (
        <Person 
          name={person.name}
          number={person.number}
          key={person.id}
        />
      ))}
    </>
  )
}

export default Persons