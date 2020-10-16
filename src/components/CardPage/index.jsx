import React from 'react';
import s from './CardPage.module.scss';
import CardItem from "../CardItem";

const CardPage = () => {
    // Я захардкодил этот объект как имитацию того, что он пришёл с сервера
    const data = [
        {
            id: 1,
            filling: 'с фуа-гра',
            size: '0,5',
            extra: {
                portions: {
                    count: 10,
                    value: 'порций'
                },
                gift: {
                    count: 0,
                    value: 'мышь в подарок'
                },
                happyClient: null
            },
            description: 'Печень утки разварная с артишоками',
            disabled: false,
            disabledText: 'Печалька, с фуа-гра закончился.',
        },
        {
            id: 2,
            filling: 'с рыбой',
            size: '2',
            extra: {
                portions: {
                    count: 40,
                    value: 'порций'
                },
                gift: {
                    count: 5,
                    value: 'мышей в подарок'
                },
                happyClient: null
            },
            description: 'Головы щучьи с чесноком да свежайшая сёмгушка',
            disabled: false,
            disabledText: 'Печалька, с рыбой закончился.',
        },
        {
            id: 3,
            filling: 'с курой',
            size: '5',
            extra: {
                portions: {
                    count: 100,
                    value: 'порций'
                },
                gift: {
                    count: 5,
                    value: 'мышей в подарок'
                },
                happyClient: true
            },
            description: 'Филе из цыплят с трюфелями в бульоне',
            disabled: true,
            disabledText: 'Печалька, с курой закончился.',
        },
    ]

    return (
        <div className={s.cardPage}>
            <h2 className={s.cardPageTitle}>Ты сегодня покормил кота?</h2>
            <div className={s.cardPageContent}>
                {data.map( card => (
                    <CardItem filling={card.filling} size={card.size} key={card.id} extra={card.extra}
                    description={card.description} disabled={card.disabled} disabledText={card.disabledText}/>
                ))}
            </div>
        </div>
    )
}

export default CardPage;