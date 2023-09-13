import React from 'react'

function ActionFilterButton({ name, selectedFilter, changeFilter }) {
    return (
        <li key={name}>
            <a
                className={selectedFilter === name ? 'selected' : ''}
                onClick={() => changeFilter(name)}
            >
                {name}
            </a>
        </li>
    )
}

export default ActionFilterButton