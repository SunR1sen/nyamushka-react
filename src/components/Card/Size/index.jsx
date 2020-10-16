import React from 'react';
import s from '../Card.module.scss';

const Size = () => {
    return (
        <div className={s.sizeWrapper}>
            <span className={s.amount}>0,5</span>
            <span className={s.units}>кг</span>
        </div>
    )
}

export default Size;