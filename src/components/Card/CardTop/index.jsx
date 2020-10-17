import React from 'react';
import s from './CardTop.module.scss';

const CardTop = (props) => {
    return (
        <div className={s.wrapper}>
            {props.dontLike
                ? <span className={s.catDontLike}>Котэ недоволен?</span>
                : <span className={s.defaultText}>Сказочное заморское яство</span>
            }
        </div>
    )
}

export default CardTop;