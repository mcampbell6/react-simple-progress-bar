
import React from 'react'
import ReactDOM from 'react-dom'
import Demo from './demo'

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Demo),
        document.getElementById('mount')
    )
})
