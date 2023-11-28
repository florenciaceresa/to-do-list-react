import './Task.css';
import { TiDeleteOutline } from 'react-icons/ti';

export function Task() {
    return(
        <div className="task">
            <button className='check-container'>
                <div/>
            </button>

            <p>English Homework</p>

            <button className='delete-button'>
                <TiDeleteOutline className='delete' />
            </button>

        </div>
    )
}