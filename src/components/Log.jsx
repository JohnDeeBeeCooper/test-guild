import React from 'react';

export default (props) => (
    <div className="log">
        <div className="namespace">Итоги сделок прошлого года</div>
        <ul>
            {props.logs.map(log => <li><p>{log}</p></li>)}
        </ul>
    </div>)