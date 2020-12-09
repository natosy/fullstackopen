import React from 'react'

const Total = ({ course }) => {
    const parts = course.parts
    const sum = parts.reduce(
        (total, part) => total + part.exercises,
        0)

    return (
        <p>Total of {sum} exercises</p>
    )
}

export default Total