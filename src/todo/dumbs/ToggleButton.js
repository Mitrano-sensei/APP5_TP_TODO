import React from 'react'
import '../Todo.css'

function ToggleButton({ onToggle }) {
    return (
        <>
            <input
                type="checkbox"
                id="toggle-all"
                className="toggle-all"
                onClick={(e) => onToggle(e.target.checked)}
            />
            <label htmlFor="toggle-all">Tâches finies</label>

        </>

    )
}

export default ToggleButton