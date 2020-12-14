import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    return axios
        .get(baseUrl)
        .then(response => response.data)
}

const addPerson = newPerson => {
    return axios
        .post(baseUrl, newPerson)
        .then(response => response.data)
}

const deletePerson = (id) => {
    return axios
        .delete(`${baseUrl}/${id}`)
}

const updateNumber = (id, newPerson) => {
    return axios
        .put(`${baseUrl}/${id}`, newPerson)
        .then(response => response.data)
}

const phonebookService = { getAll, addPerson, deletePerson, updateNumber }

export default phonebookService