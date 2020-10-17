import React from 'react';
import s from './Filling.module.scss';

const Filling = ({filling}) => {
    return (
        <span className={s.filling}>{filling}</span>
    )
}

export default Filling;