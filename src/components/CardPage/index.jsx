import React from 'react';
import Card from "../Card";
import s from './CardPage.module.scss';

const CardPage = () => {
    const extraItems = {
        portions: {
            count: 10,
            value: 'порций'
        },
        gift: {
            count: 0,
            value: 'мышь в подарок'
        },
        happyClient: {
            text: 'заказчик доволен'
        }
    }

    return (
        <div className={s.cardPage}>
            <Card extra={extraItems}/>
        </div>
    )
}

export default CardPage;