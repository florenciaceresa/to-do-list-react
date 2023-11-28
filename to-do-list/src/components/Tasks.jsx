import './Tasks.css'
import { Task } from './Task'

export function Tasks() {
    return(
        <section className="tasks">
            <header className='task-header'>
                <div>
                    <p>To do</p>
                    <span>5</span>
                </div>
                <div>
                    <p>Complete</p>
                    <span>2 of 5</span>
                </div>
            </header>

            <div className='task'>
                <Task/>

            </div>

        </section>
    )
}