import React from 'react'
import ActionFilterButton from './ActionFilterButton'

function TodoFooter({remainingTasks, selectedFilter, setSelectedFilter}) {
    
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{remainingTasks} tâches restantes</strong>
            </span>
            <ul className="filters">
                <ActionFilterButton name='ALL' selectedFilter={selectedFilter} changeFilter={setSelectedFilter} />
                <ActionFilterButton name='ACTIVE' selectedFilter={selectedFilter} changeFilter={setSelectedFilter} />
                <ActionFilterButton name='COMPLETED' selectedFilter={selectedFilter} changeFilter={setSelectedFilter} />
            </ul>
        </footer>
    )
}

export default TodoFooter