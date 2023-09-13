import { useState } from 'react';
import { createNewTask, INITIAL_TASKS } from './task-util';
import './Todo.css';
import NewTodoForm from './dumbs/NewTodoForm';
import TodoList from './dumbs/TodoList';

let refresh = 1;

export function TodoContainer() {
    const [tasks, setTasks] = useState(INITIAL_TASKS);
    // Derived State (sub state from state)
    // do not put derived state in the state !
    const remainingTasks = tasks.filter((t) => !t.completed).length;
    console.log('REFRESH', refresh++);

    function onComplete(task) {
        setTasks((tasks) =>
            tasks.map((t) => (t.id === task.id ? { ...task, completed: !task.completed } : t)));
    }

    function onDestroy(task) {
        setTasks((tasks) => tasks.filter((t) => t.id !== task.id));
    }

    function onToggle(checked) {
        setTasks(prevTasks => {
            const newTasks = prevTasks.map((t) => {
                if (t.completed === checked) {
                    return t;
                } else {
                    return { ...t, completed: checked };
                }
            });
            return newTasks;
        });
    }

    function onCreateTask(event) {
        if (event.keyCode === 13) {
            // setTasks(tasks => ([...tasks, createNewTask(value)])); // id will inc by 2 ! because of <StrictMode>
            // Solution
            // Avoid side-effect
            // prepare your data BEFORE updating the state
            const newTask = createNewTask(event.target.value);
            event.target.value = '';
            setTasks((tasks) => [...tasks, newTask]);
        }
    }

    return (
        <>
            <NewTodoForm onCreateTask={onCreateTask} />
            <TodoList
                tasks={tasks}
                remainingTasks={remainingTasks}
                onToggle={onToggle}
                onComplete={onComplete}
                onDestroy={onDestroy}
            />

        </>
    );
}
