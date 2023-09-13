import React, { useState } from 'react'
import OneTodo from './OneTodo';
import ToggleButton from './ToggleButton';
import TodoFooter from './TodoFooter';

function TodoList({ tasks, onToggle, onComplete, onDestroy, remainingTasks }) {
    const [selectedFilter, setSelectedFilter] = useState('ALL')

    return (
        <section className="main">

            <ToggleButton onToggle={onToggle} />
            <ul className="todo-list">
                {tasks
                    .filter(task => {
                        if (selectedFilter === 'ALL') return true;
                        else if (selectedFilter === 'COMPLETED') return task.completed;
                        else return !task.completed;
                    })
                    .map((task) => (
                        <OneTodo task={task} completed={task.completed} onComplete={onComplete} onDestroy={onDestroy} />
                    ))}
            </ul>

            <TodoFooter remainingTasks={remainingTasks} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
        </section>
    )
}

export default TodoList