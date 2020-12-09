import React, { useState } from 'react'

const PersonForm = ({ persons, setPersons, updateNumber, addPerson }) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNewName = (event) => {
        setNewName(event.target.value)
    }

    const handleNewNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const names = persons.map(person => person.name)
        const newPerson = {
            name: newName,
            number: newNumber
        }
        if (names.includes(newName)) {
            const id = persons.find(p => p.name === newName).id
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                updateNumber(id, newPerson)
            }
        } else {
            addPerson(newPerson)
        }
        setNewName('')
        setNewNumber('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                Name: <input value={newName} onChange={handleNewName} />
            </div>
            <div>
                Number: <input value={newNumber} onChange={handleNewNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default PersonForm