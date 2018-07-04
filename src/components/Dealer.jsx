import React from 'react';

export default (props) => {
    const dealer = props.dealer;
    return (
        <div className="dealer">
            <ul className="dealer-list">
                <li>Имя: {dealer.name}</li>
                <li>Характер: {dealer.strategy}</li>
                {/* <li>Золото: {dealer.gold}</li> */}
                <li>Золота с прошлых лет: {dealer.total}</li>
            </ul>
        </div>
    )
}