import React from 'react'

const Persons = ({ persons, deletePerson }) => {
    return (
        persons.map(person =>
            <div key={person.id}>
                {person.name} {person.number}
                <button onClick={() => deletePerson(person.id, person)}>delete</button>
            </div>)
    )

}

export default Persons