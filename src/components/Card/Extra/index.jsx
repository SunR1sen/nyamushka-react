import React from 'react';
import s from './Extra.module.scss';

const Extra = (props) => {
    const {portions, gift, happyClient} = props.children;

    return (
        <div className={s.wrapper}>
            <span className={s.extraItem}>
                {portions.count ? <span className={s.count}>{portions.count} </span> : ''}
                {portions.value}
            </span>
            <span className={s.extraItem}>
                {gift.count ? <span className={s.count}>{gift.count} </span> : ''}
                {gift.value}
            </span>
            <span className={s.extraItem}>
                {happyClient ? <span>{happyClient.text} </span> : ''}
            </span>
        </div>
    )
}

export default Extra;