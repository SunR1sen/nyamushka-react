import React from 'react';
import s from './Card.module.scss';

const Card = () => {
    return (
        <div className={s.cardBody}>
            <div className={s.cardTop}>Card top</div>
            Card body
        </div>
    )
}

export default Card;