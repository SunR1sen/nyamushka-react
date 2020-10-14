import React from 'react';
import Card from "../Card";
import s from './CardPage.module.scss';

const CardPage = () => {
    return (
        <div className={s.cardPage}>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default CardPage;