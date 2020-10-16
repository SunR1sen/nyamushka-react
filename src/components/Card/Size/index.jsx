import React from 'react';
import s from '../Card.module.scss';

const Size = (props) => {
    return (
        <div className={s.sizeWrapper}>
            <span className={s.amount}>{props.size}</span>
            <span className={s.units}>кг</span>
        </div>
    )
}

export default Size;