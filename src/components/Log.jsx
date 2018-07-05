import React from 'react';

export default (props) => (
    <div className="log">
        <div className="namespace">Итоги прошлого года</div>
        <div className="log-scroll">
            <ul>
                {props.logs.map(log => <li><p>{log}</p></li>)}
            </ul>
        </div>
    </div>)