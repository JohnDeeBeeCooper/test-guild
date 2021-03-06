import React from 'react';
import Dealer from './Dealer';

export default (props) => {
    return (<div className="guild">
        <div className="guild namespace">Древняя гильдия торговцев</div>
        <div className="guild-scroll">
            {props.guild.map(item => <Dealer key={item.id} dealer={item} />)}
        </div>
    </div>
    )
}

