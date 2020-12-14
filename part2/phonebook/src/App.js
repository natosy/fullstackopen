import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import './index.css'

import phonebookService from './services/phonebook'

const App = () => {
    const [persons, setPersons] = useState([])
    const [search, setSearch] = useState('')
    const [message, setMessage] = useState(null)
    const [isSuccess, setIsSuccess] = useState(true)

    useEffect(() => {
        phonebookService
            .getAll()
            .then(persons => {
                setPersons(persons)
            })
    }, [])

    const handleSearch = (event) => setSearch(event.target.value)

    const notify = (msg, success) => {
        setIsSuccess(success)
        setMessage(msg)
        setTimeout(() => {
            setMessage(null)
        }, 5000)
    }

    const searchedPersons =
        search === ''
            ? persons
            : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

    const deletePerson = (id, person) => {
        if (window.confirm(`Delete ${person.name}?`)) {
            phonebookService
                .deletePerson(id)
                .then(setPersons(persons.filter(person => person.id !== id)))
                .catch(error => {
                    const msg = `Information of ${person} has already been removed from server`
                    notify(msg, false)
                })
        }
    }

    const updateNumber = (id, newPerson) => {
        phonebookService
            .updateNumber(id, newPerson)
            .then(updatedPerson => {
                setPersons(persons
                    .map(person =>
                        person.id === updatedPerson.id
                            ? updatedPerson
                            : person))
            })
            .catch(error => {
                const msg = `Information of ${newPerson.name} has already been removed from server`
                notify(msg, false)
            })
    }

    const addPerson = (newPerson) => {
        phonebookService
            .addPerson(newPerson)
            .then(newPerson => {
                setPersons(persons.concat(newPerson))
                notify(`Added ${newPerson.name}`, true)
            })
            .catch(error => {
                notify(error.response.data.error, false)
            })
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={message} isSuccess={isSuccess} />
            Filter
            <Filter search={search} handleSearch={handleSearch} />
            <h3>Add New Entry</h3>
            <PersonForm persons={persons} setPersons={setPersons} updateNumber={updateNumber} addPerson={addPerson} />
            <h3>Numbers</h3>
            <Persons persons={searchedPersons} deletePerson={deletePerson} />
        </div>
    )
}

export default App