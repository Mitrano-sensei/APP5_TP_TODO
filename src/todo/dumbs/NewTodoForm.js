import React from 'react'

function NewTodoForm({onCreateTask}) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                className="new-todo"
                placeholder="Ajouter une tâche"
                autoComplete="off"
                autoFocus={true}
                onKeyDown={onCreateTask}
            />
        </form>
    )
}

export default NewTodoForm