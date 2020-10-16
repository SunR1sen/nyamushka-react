import React from 'react';
import s from './Filling.module.scss';

const Filling = ({children}) => {
    return (
        <span className={s.filling}>{children}</span>
    )
}

export default Filling;