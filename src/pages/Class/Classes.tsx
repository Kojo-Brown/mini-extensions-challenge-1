import { FunctionComponent } from 'react';

import { ClassData, ClassesProps } from '../../types';

const Classes: FunctionComponent<ClassesProps> = (props) => {
    return (
        <>
            {/* Rendering each card */}
            <div className="boxes">
                {Object.entries(props.data).map(([key, item]) => (
                    <Class {...item} key={key} />
                ))}
            </div>

            {/* Performs Logout functionality throught props */}
            <button className="logout" onClick={props.handleLogout}>
                Logout
            </button>
        </>
    );
}

const Class: FunctionComponent<ClassData> = (props) => {
    return (
        <div id="card-container">
            <h5 className="card-caption">Name</h5>
            <span className="card-content">{props.Name}</span>
            <h5 className="card-caption">Students</h5>
            <span className="card-content">{props.Students.join(', ')}</span>
        </div>
    );
}

export default Classes;